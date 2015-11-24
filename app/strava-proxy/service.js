import Ember from 'ember';
import ENV from 'runnersq/config/environment';

export default Ember.Service.extend({
  getActivities(perPage) {
    console.log(ENV.STRAVA_ACCESS_TOKEN);
    console.log(ENV.STRAVA_API_URL);
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.$.ajax({
        url: ENV.STRAVA_API_URL,
        type: 'GET',
        dataType: 'jsonp',
        data: {
          access_token: ENV.STRAVA_ACCESS_TOKEN,
          per_page: 200
        }
      }).done((res)=>{
        console.log('SUCCESS: ', res);
      }, (error)=>{
        console.log('ERROR: ',error);
      });
    })
  }
});
