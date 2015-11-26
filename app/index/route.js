import Ember from 'ember';

export default Ember.Route.extend({
  historyStore: Ember.inject.service(),
  model: function(){
    const summaryPromise = new Ember.RSVP.Promise((resolve)=> {
      this.get('historyStore').getActivities().then((activities) => {
        let thisWeeksActivities = activities.filter(function(value) {
          return moment.utc(value.start_time).isAfter(moment().day(-1));
        });
        let distance = thisWeeksActivities.mapBy('distance');
        let totalMeters = distance.reduce( (prev, curr) => prev + curr );
        let totalMiles = totalMeters * 0.000621371;

        let duration = thisWeeksActivities.mapBy('duration');
        let totalDuration = duration.reduce( (prev, curr) => prev + curr );
        let d = moment.duration(totalDuration, 'seconds');
        let durationDisplay = d.hours() + 'h ' + d.minutes() + 'm';

        let summary = {
          distance: totalMiles.toFixed(2),
          duration: durationDisplay,
          title: 'Current Week'
        }
        resolve(summary);
      });
    })
    const weekPromise = new Ember.RSVP.Promise((resolve)=>{
      this.get('historyStore').getActivities().then((activities)=>{
        //Filter Activities
        let thisWeeksActivities = activities.filter(function(value) {
          return moment.utc(value.start_time).isAfter(moment().day(-1));
        });
        //get summary for each day
        let summaries = []
        let m = moment();
        for (var i = 0; i < 7; i++) {

          let todaysActivities = thisWeeksActivities.filter(function(value){
            return moment.utc(value.start_time).day() === m.day(i).day();
          });

          if (todaysActivities.length === 0) {
            let stat = {
              distance:0.0,
              duration:'-m -h -s',
              pace: '-:-/m',
              title: m.day(i).format('dddd')
            };

            summaries.push(stat)

          } else {
            let distance = todaysActivities.mapBy('distance');
            let totalMeters = distance.reduce( (prev, curr) => prev + curr );
            let totalMiles = totalMeters * 0.000621371;

            let duration = thisWeeksActivities.mapBy('duration');
            let totalDuration = duration.reduce( (prev, curr) => prev + curr );
            let d = moment.duration(totalDuration, 'seconds');
            let durationDisplay = d.hours() + 'h ' + d.minutes() + 'm';

            let stat = {
              distance:totalMiles.toFixed(2),
              duration:durationDisplay,
              pace:"???",
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
