import Ember from 'ember';

export default Ember.Route.extend({
  activityService: Ember.inject.service(),
  model(){
    const svc = this.get('activityService');
    const numberOfWeeks = 32;
    const summaryPromise = new Ember.RSVP.Promise((resolve)=> {
      svc.getActivities().then((activities)=>{
        //Filter to Runs
        let runs = activities.filter(function(value){
          return value.type === 'Run';
        });

        let grouped = _.groupBy(runs, function(run){
          return moment(run.start_time).format('MMM YY');
        });

        let months = []
        //load old data
        for (var variable in grouped) {
          if (grouped.hasOwnProperty(variable)) {
            //create metric
            let totalMeters = svc.mapReduceSum(grouped[variable], 'distance');
            let totalMiles = totalMeters * 0.000621371

            let totalSeconds = svc.mapReduceSum(grouped[variable], 'duration');
            let d = moment.duration(totalSeconds, 'seconds');
            let durationDisplay =d.days() + 'd ' + d.hours() + 'h ' + d.minutes() + 'm';

            let metric = {
              title:variable,
              distance:totalMiles.toFixed(2),
              duration:durationDisplay,
              number:grouped[variable].length
            };
            months.push(metric);
          }
        }
        let lastSix = months.slice(1,7);
        let lastDistance = lastSix.mapBy('distance');
        let lastMiles = lastDistance.reduce(function(prev, curr){
          return Number(prev) + Number(curr);
        });

        let previousSix = months.slice(7,13);
        let previousDistance = previousSix.mapBy('distance');
        let previousMiles = previousDistance.reduce(function(prev, curr){
          return Number(prev) + Number (curr);
        });

        let allDistance = months.mapBy('distance');
        let allMiles = allDistance.reduce(function(prev, curr){
          return Number(prev) + Number(curr);
        });

        var stats ={
          last:(lastMiles/6).toFixed(2),
          previous: (previousMiles/6).toFixed(2),
          all: (allMiles/months.length).toFixed(2),
          months: months
        }
        resolve(stats);
      });
    });
    return summaryPromise;
  }
});
