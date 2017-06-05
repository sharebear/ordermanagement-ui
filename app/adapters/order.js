import DS from 'ember-data';

export default DS.Adapter.extend({
  findAll(store, type, sinceToken) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.getJSON("http://localhost:4567/ordermanagement/orders").then(function(data) {
        console.log(data);
        resolve(data);
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  }
});
