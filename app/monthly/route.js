import Ember from 'ember';

export default Ember.Route.extend({
  historyStore: Ember.inject.service(),
  model: function(){
    const svc = this.get('historyStore');
    const numberOfWeeks = 32;
    const summaryPromise = new Ember.RSVP.Promise((resolve)=> {
      svc.getActivities().then((activities)=>{
        let weeks = [];
        for (var i = 0; i < numberOfWeeks; i++) {
          let summary = svc.summaryForWeek(i, activities);
          weeks.push(Promise.resolve(summary));
        }
        Promise.all(weeks).then((values)=>{
          resolve(values);
        });
      });
    });
    return summaryPromise;
  }
});
