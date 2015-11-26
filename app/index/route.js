import Ember from 'ember';

export default Ember.Route.extend({
  mapReduceSum(items, property){
    let mappedItems = items.mapBy(property);
    let reducedItems = mappedItems.reduce( (prev, curr) => prev + curr );
    return reducedItems;
  },
  historyStore: Ember.inject.service(),
  model: function(){

    const mapReduce = this.get('mapReduceSum');

    const summaryPromise = new Ember.RSVP.Promise((resolve)=> {
      this.get('historyStore').getActivities().then((activities) => {
        let thisWeeksActivities = activities.filter(function(value) {
          return moment.utc(value.start_time).isAfter(moment().day(-1));
        });

        let totalMeters = mapReduce(thisWeeksActivities, 'distance');
        let totalMiles = totalMeters * 0.000621371;

        let totalSeconds = mapReduce(thisWeeksActivities, 'duration');
        let d = moment.duration(totalSeconds, 'seconds');
        let durationDisplay = d.hours() + 'h ' + d.minutes() + 'm';

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
        for (var i = 0; i < 7; i++) {
          let todaysActivities = thisWeeksActivities.filter(function(value){
            return moment.utc(value.start_time).day() === m.day(i).day();
          });

          if (todaysActivities.length === 0) {
            let stat = {
              distance:0.0,
              duration:'- h - m - s',
              pace: '-:-/m',
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
            let paceDisplay = dd.minutes() + ':' + dd.seconds() +"/m"

            let stat = {
              distance:totalMiles.toFixed(2),
              duration:durationDisplay,
              pace:paceDisplay,
              title:m.day(i).format('dddd')
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
