import Ember from 'ember';

export default Ember.Route.extend({
  stravaProxy: Ember.inject.service(),
  model: function() {
    return this.get('stravaProxy').getActivities(200);
  }
});
