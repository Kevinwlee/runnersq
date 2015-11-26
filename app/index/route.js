import Ember from 'ember';

export default Ember.Route.extend({
  historyStore: Ember.inject.service(),
  model: function(){
    const summaryPromise = new Ember.RSVP.Promise((resolve)=> {
      this.get('historyStore').getActivities().then((activities) => {
        let thisWeeksActivities = activities.filter(function(value) {
          return moment(value.start_time).isAfter(moment().day(-1));
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
    // const weekPromise = new Ember.RSVP.Promise((resolve){
    this.get('historyStore').getActivities().then((activities)=>{
      //Filter Activities
      let thisWeeksActivities = activities.filter(function(value) {
        return moment(value.start_time).isAfter(moment().day(-1));
      });
      console.log(thisWeeksActivities);
      //get summary for each day
      let m = moment();
      for (var i = 0; i < 7; i++) {
        console.log(m.day(i).format('dddd'));
        let todaysActivities = thisWeeksActivities.filter(function(value){
          return moment(value.start_time).day() === m.day(i).day();
        });
        console.log(todaysActivities);
      }
    });
      //resolve the summary
    //   resolve();
    // });
    return Ember.RSVP.hash({
      summary:summaryPromise,
      weekStat: [
        {
          distance:12.1,
          duration:'1h 33m',
          pace: '8:34/mi',
          title: 'Moday',
          class: 'text-success'
        },
        {
          distance:4.1,
          duration:'1h 33m',
          pace: '8:34/mi',
          title: 'Tuesday',
          class: 'text-primary'
        },
        {
          distance:0.0,
          duration:'-h -m',
          pace: '-:-/mi',
          title: 'Wednesday',
          class: 'text-default',
          isToday:true
        },
        {
          distance:0.0,
          duration:'0h 0m',
          pace: '-:-/mi',
          title: 'Thursday',
          class: 'text-default'
        },
        {
          distance:2.1,
          duration:'1h 33m',
          pace: '8:34/mi',
          title: 'Friday',
          class: 'text-warning'
        },
        {
          distance:12.1,
          duration:'1h 33m',
          pace: '8:34/mi',
          title: 'Saturday',
          class: 'text-success'
        },
        {
          distance:22.1,
          duration:'1h 33m',
          pace: '8:34/mi',
          title: 'Sunday',
          class: 'text-success'
        },
      ]

    });
  }
});
