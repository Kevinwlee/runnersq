import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('activity', function() {
    this.route('strava');
    this.route('history');
    this.route('runkeeper');
    this.route('nike');
  });
  this.route('weekly');
  this.route('yearly');
  this.route('lifetime');
  this.route('monthly');
});

export default Router;
