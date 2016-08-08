import Ember from 'ember';

export default Ember.Route.extend({
  cordova: Ember.inject.service(),

  model() {
    return this.get('store').findAll('rental');
  },

  afterModel() {
    this.get('cordova').on('deviceready', this, '_checkGeoLocation');
  },

  _checkGeoLocation() {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        alert(position.coords);
      },
      function(error) {
        alert(error);
      }
    );
  }
});
