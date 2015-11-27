import Ember from 'ember';
// import moment from 'moment';

export default Ember.Route.extend({
  mapReduceSum(items, property){
    let mappedItems = items.mapBy(property);
    let reducedItems = mappedItems.reduce( (prev, curr) => prev + curr );
    return reducedItems;
  },
  durationForDisplay(totalSeconds){
    let d = moment.duration(totalSeconds, 'seconds');
    let durationDisplay = d.hours() + 'h ' + d.minutes() + 'm';
    return durationDisplay;
  },
  historyStore: Ember.inject.service(),
  model: function(){
    let iterator = 4;

    const mapReduce = this.get('mapReduceSum');

    const summaryPromise = new Ember.RSVP.Promise((resolve)=> {
      this.get('historyStore').getActivities().then((activities) => {

        //Get Weekly Metric
        let calc = ((7 * iterator) * -1);
        let sunday = moment().day(calc -1) //-1 to get to Saturday
        let saturday = moment().day(calc + 6);
        debugger;
        let thisWeeksActivities = activities.filter(function(value) {
          return moment.utc(value.start_time).isBetween(sunday, saturday);
        });

        let totalMeters = mapReduce(thisWeeksActivities, 'distance');
        let totalMiles = totalMeters * 0.000621371;

        let totalSeconds = mapReduce(thisWeeksActivities, 'duration');
        const durationForDisplay = this.get('durationForDisplay');
        let durationDisplay = durationForDisplay(totalSeconds);
        let summaryTitle = calc === 0 ? "Current Week" : 'Week of ' + moment().day(calc).format('MMM Do');
        let summary = {
          distance: totalMiles.toFixed(2),
          duration: durationDisplay,
          title: summaryTitle
        };

        // Get the daily metrics
        let summaries = [];

        let dailyActivities = {};

        for (var i = 0; i < thisWeeksActivities.length; i++) {
          let activity = thisWeeksActivities[i];
          let day = moment.utc(activity.start_time).day();
          if (dailyActivities[day]) {
            dailyActivities[day].push(activity);
          } else {
            dailyActivities[day] = [activity];
          }
        }

        for (var i = 0; i < 7; i++) {
          let todaysActivities = dailyActivities[i] ? dailyActivities [i] : [];

          if (todaysActivities.length === 0) {
            //No activity on this day
            let stat = {
              distance:0.0,
              duration:'rest day',
              pace: '',
              title: moment().day(i).format('dddd')
            };

            summaries.push(stat);

          } else {
            //build the day
            let totalMeters = mapReduce(todaysActivities, 'distance');
            let totalMiles = totalMeters * 0.000621371;

            let totalSeconds = mapReduce(todaysActivities, 'duration');
            let d = moment.duration(totalSeconds, 'seconds');
            let durationDisplay = d.hours() + 'h ' + d.minutes() + 'm ' + d.seconds() +'s';

            let pace = d.asMinutes()/totalMiles;
            let dd = moment.duration(pace, 'minutes');
            let paceDisplay = dd.minutes() + ':' + dd.seconds() +"/m";

            var css= 'text-default';
            if (totalMiles > 10) {
              css = 'text-success';
            } else if (totalMiles > 6 ) {
              css = 'text-primary';
            } else if (totalMiles > 0){
              css = 'text-warning';
            }

            let title = moment().day(calc + i).format('dddd');

            let stat = {
              distance: totalMiles.toFixed(2),
              duration: durationDisplay,
              pace: paceDisplay,
              title: title,
              class: css
            };

            summaries.push(stat);
          }
        }
        //add the weekly metrics to the summary metric.
        summary['weekStats'] = summaries;
        resolve(summary);
      });
    });
    return Ember.RSVP.hash({
      summary: summaryPromise
    });
  }
});
