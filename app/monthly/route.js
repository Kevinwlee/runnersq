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
        console.log(grouped);
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

        resolve(months);
      });
    });
    return summaryPromise;
  }
});
