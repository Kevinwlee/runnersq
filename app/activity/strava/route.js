import Ember from 'ember';

export default Ember.Route.extend({
  activityService: Ember.inject.service(),
  model: function() {
    return this.get('activityService').getStravaActivities(200);
  }
});
