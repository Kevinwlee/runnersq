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
          return moment(run.start_time).year();
        });
        console.log(grouped);
        let years = []
        //load old data
        var five = {
          year:2005,
          distance:45.7,
          duration:"0d 8h 57m",
          number:9
        };
        var six = {
          year:2006,
          distance:663.71,
          duration:"3d 14h 00m",
          number:110

        };
        var seven = {
          year:2007,
          distance:333.53,
          duration:"2d 0h 55m",
          number:74
        };
        var eight = {
          year: 2008,
          distance: 170.72,
          duration: '1d 03h 57m',
          number: 39
        };
        years.push(five);
        years.push(six);
        years.push(seven);
        years.push(eight);
        for (var variable in grouped) {
          if (grouped.hasOwnProperty(variable)) {
            //create metric
            let totalMeters = svc.mapReduceSum(grouped[variable], 'distance');
            let totalMiles = totalMeters * 0.000621371

            let totalSeconds = svc.mapReduceSum(grouped[variable], 'duration');
            let d = moment.duration(totalSeconds, 'seconds');
            let durationDisplay =d.days() + 'd ' + d.hours() + 'h ' + d.minutes() + 'm';

            let metric = {
              year:variable,
              distance:totalMiles.toFixed(2),
              duration:durationDisplay,
              number:grouped[variable].length
            };
            years.push(metric);
          }
        }

        resolve(years.reverse());
      });
    });
    return summaryPromise;
  }
});
