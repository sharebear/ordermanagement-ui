import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON("http://localhost:4567/ordermanagement/orders")
    .then(function(data) {
      return data.data;
    });
  }
});
