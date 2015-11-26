import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    id: DS.attr(),
    type: DS.attr(),
    distance: DS.attr(),
    duration: DS.attr(),
    start_time:DS.attr(),
    source:DS.attr(),
    miles: Ember.computed('distance', function() {
      return this.get('distance')* 0.000621371;
    }),
    time: Ember.computed('duration'), function() {
      // let hours = moment.duration(this.get('duration'), 'seconds').hours();
      return moment.duration(this.get('duration'), 'seconds').humanize();
    }

});
