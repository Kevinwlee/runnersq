import Ember from 'ember';

export default Ember.Route.extend({
  historyStore: Ember.inject.service(),
  model: function(){
    const svc = this.get('historyStore');
    const numberOfWeeks = 32;
    const summaryPromise = new Ember.RSVP.Promise((resolve)=> {
      svc.getActivities().then((activities)=>{
        //Filter to Runs
        let runs = activities.filter(function(value){
          return value.type === 'Run';
        });

        let weeklyStats = [];
        for (var i = 0; i < numberOfWeeks; i++) {
          let summary = svc.summaryForWeek(i, runs);
          weeklyStats.push(Promise.resolve(summary));
        }

        Promise.all(weeklyStats).then((values)=>{

          let firstFive = values.slice(1,6);
          let firstDist = firstFive.mapBy("distance");
          let sumDist = firstDist.reduce( function(prev, curr) {
            return Number(prev) + Number(curr);
          });
          let firstAvgDist = (sumDist/5).toFixed(2);

          let previousFive = values.slice(6,11);
          let prevDist = previousFive.mapBy("distance");
          let prevSumDist = prevDist.reduce( function(prev, curr) {
            return Number(prev) + Number(curr);
          });
          let prevAvgDist = (prevSumDist/5).toFixed(2);

          let allDist = values.mapBy("distance");
          let allSumDist = allDist.reduce( function(prev, curr) {
            return Number(prev) + Number(curr);
          });
          let allAvgDist = (allSumDist/numberOfWeeks).toFixed(2);

          const stats = {
            weeks:values,
            recent:firstAvgDist,
            past:prevAvgDist,
            all:allAvgDist
          };
          resolve(stats);
        });
      });
    });
    return summaryPromise;
  }
});
