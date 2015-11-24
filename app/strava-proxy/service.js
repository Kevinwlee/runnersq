import Ember from 'ember';
import ENV from 'runnersq/config/environment';

export default Ember.Service.extend({
  getActivities(perPage) {
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.$.ajax({
        url: ENV.STRAVA_API_URL,
        type: 'GET',
        dataType: 'jsonp',
        data: {
          access_token: ENV.STRAVA_ACCESS_TOKEN,
          per_page: perPage
        }
      }).done((res)=>{
        console.log('SUCCESS: ', res);
      }, (error)=>{
        console.log('ERROR: ',error);
      });
    })
  }
});
