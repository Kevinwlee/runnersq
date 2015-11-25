import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('activity', function() {
    this.route('strava');
    this.route('history');
    this.route('allTime');
  });
  this.route('monthly');
  this.route('yearly');
  this.route('lifetime');
});

export default Router;
