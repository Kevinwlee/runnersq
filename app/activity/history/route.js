import Ember from 'ember';

export default Ember.Route.extend({
  historyStore: Ember.inject.service(),
  model:function(){
    return this.get('historyStore').getArchive();
  }
});
