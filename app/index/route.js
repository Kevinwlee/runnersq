import Ember from 'ember';

export default Ember.Route.extend({
  historyStore: Ember.inject.service(),
  model: function(){
    var svc = this.get('historyStore');
    const summaryPromise = new Ember.RSVP.Promise((resolve)=> {
      svc.getActivities().then((activities)=>{
        resolve(svc.summaryForWeek(0, activities));
      });
    });

    return summaryPromise;
  }
});
