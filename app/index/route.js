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

    const mapReduce = this.get('mapReduceSum');

    const summaryPromise = new Ember.RSVP.Promise((resolve)=> {
      this.get('historyStore').getActivities().then((activities) => {
        let summayActivities = activities.filter(function(value) {
          return moment.utc(value.start_time).isAfter(moment().day(-1));
        });

        let totalMeters = mapReduce(summayActivities, 'distance');
        let totalMiles = totalMeters * 0.000621371;

        let totalSeconds = mapReduce(summayActivities, 'duration');
        const durationForDisplay = this.get('durationForDisplay');
        let durationDisplay = durationForDisplay(totalSeconds);

        let summary = {
          distance: totalMiles.toFixed(2),
          duration: durationDisplay,
          title: 'Current Week'
        };
        resolve(summary);
      });
    });

    const weekPromise = new Ember.RSVP.Promise((resolve)=>{
      this.get('historyStore').getActivities().then((activities)=>{
        //Filter Activities
        let thisWeeksActivities = activities.filter(function(value) {
          return moment.utc(value.start_time).isAfter(moment().day(-1));
        });

        //get summary for each day
        let summaries = [];
        let m = moment();

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
        console.log(dailyActivities);
        for (var i = 0; i < 7; i++) {
          //need to move this out!
          // let day = moment.utc(value.start_time).day();

          let todaysActivities = dailyActivities[i] ? dailyActivities [i] : [];

          if (todaysActivities.length === 0) {
            let stat = {
              distance:0.0,
              duration:'rest day',
              pace: '',
              title: m.day(i).format('dddd')
            };

            summaries.push(stat);

          } else {
            let totalMeters = mapReduce(todaysActivities, 'distance');
            let totalMiles = totalMeters * 0.000621371;

            let totalSeconds = mapReduce(todaysActivities, 'duration');
            let d = moment.duration(totalSeconds, 'seconds');
            let durationDisplay = d.hours() + 'h ' + d.minutes() + 'm' + d.seconds() +'s';

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

            let title = m.day(i).format('dddd');
            
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
        //resolve the summary
         resolve(summaries);
      });

    });
    return Ember.RSVP.hash({
      summary:summaryPromise,
      weekStat: weekPromise
    });
  }
});
