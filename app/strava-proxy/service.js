import Ember from 'ember';
import ENV from 'runnersq/config/environment';

var cachedActivities;

export default Ember.Service.extend({
  getActivities(perPage) {
    return new Ember.RSVP.Promise(function(resolve) {
      if (cachedActivities) {
        console.log("from cache");
        resolve(cachedActivities);
      } else {
        Ember.$.ajax({
          url: ENV.STRAVA_API_URL,
          type: 'GET',
          dataType: 'jsonp',
          data: {
            access_token: ENV.STRAVA_ACCESS_TOKEN,
            per_page: perPage
          }
        }).then((response)=>{
          var activities = [];
          $.each(response, function( index, value ) {
            var activity = {
              id: value.id,
              type: value.type,
              distance: value.distance,
              duration: value.moving_time,
              start_time:value.start_date_local,
              source:'Strava'
            }
            activities.push(activity);
          });
          cachedActivities = activities;
          resolve(cachedActivities);

        }, (error)=>{
          console.log('ERROR: ',error);
        });
      }
    })
  }
});
