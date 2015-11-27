import Ember from 'ember';

export default Ember.Route.extend({
  historyStore: Ember.inject.service(),
  model: function() {
    const totalMilesPromise = new Ember.RSVP.Promise((resolve)=> {
      this.get('historyStore').getActivities().then((allTime)=>{
        var activities = allTime.filter(function(value){
          return  value.type !== 'Walking';
        });
        var distance = activities.mapBy('distance');
        var totalMeters = distance.reduce( (prev, curr) => prev + curr );
        var totalMiles = totalMeters * 0.000621371;

        var duration = activities.mapBy('duration');
        var totalDuration = duration.reduce( (prev, curr) => prev + curr );
        let d = moment.duration(totalDuration, 'seconds');
        let durationDisplay = d.days() + 'd ' + d.hours() + 'h ' + d.minutes() + 'm ' + d.seconds() +'s';
        var stats = {
          distance: totalMiles.toFixed(2),
          count: activities.length,
          duration: durationDisplay
        };
        resolve(stats);
      });
    });

    function isRun(value) {
      return value.type === 'Run';
    }
    const runsPromise = new Ember.RSVP.Promise((resolve)=>{
      this.get('historyStore').getActivities().then((allTime)=>{
        var activities = allTime.filter(isRun);

        var distance = activities.mapBy('distance');
        var totalMeters = distance.reduce( (prev, curr) => prev + curr );
        var totalMiles = totalMeters * 0.000621371;

        var duration = activities.mapBy('duration');
        var totalDuration = duration.reduce( (prev, curr) => prev + curr );
        let d = moment.duration(totalDuration, 'seconds');
        let durationDisplay = d.hours() + 'h ' + d.minutes() + 'm ' + d.seconds() +'s';

        var stats = {
          distance:totalMiles.toFixed(2),
          count: activities.length,
          duration:durationDisplay
        };
        resolve(stats);
      });
    });

    function isRide(value) {
      return value.type === 'Ride';
    }
    const ridesPromise = new Ember.RSVP.Promise((resolve)=>{
      this.get('historyStore').getActivities().then((allTime)=>{
        var activities = allTime.filter(isRide);
        var distance = activities.mapBy('distance');
        var totalMeters = distance.reduce( (prev, curr) => prev + curr );
        var totalMiles = totalMeters * 0.000621371;

        var duration = activities.mapBy('duration');
        var totalDuration = duration.reduce( (prev, curr) => prev + curr );
        let d = moment.duration(totalDuration, 'seconds');
        let durationDisplay = d.hours() + 'h ' + d.minutes() + 'm ' + d.seconds() +'s';

        var stats = {
          distance: totalMiles.toFixed(2),
          count: activities.length,
          duration:durationDisplay
        };

        resolve(stats);
      });
    });

    function isSwim(value) {
      return value.type === 'Swim';
    }
    const swimsPromise = new Ember.RSVP.Promise((resolve)=>{
      this.get('historyStore').getActivities().then((allTime)=>{
        var activities = allTime.filter(isSwim);
        var distance = activities.mapBy('distance');
        var totalMeters = distance.reduce( (prev, curr) => prev + curr );
        var totalMiles = totalMeters * 0.000621371;

        var duration = activities.mapBy('duration');
        var totalDuration = duration.reduce( (prev, curr) => prev + curr );
        let d = moment.duration(totalDuration, 'seconds');
        let durationDisplay = d.hours() + 'h ' + d.minutes() + 'm ' + d.seconds() +'s';

        var stats = {
          distance: totalMiles.toFixed(2),
          count: activities.length,
          duration: durationDisplay
        };
        resolve(stats);
      });
    });

    return Ember.RSVP.hash({
      total: totalMilesPromise,
      runs: runsPromise,
      rides: ridesPromise,
      swims: swimsPromise
    });
  }
});
