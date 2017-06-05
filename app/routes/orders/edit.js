import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.$.getJSON(`http://localhost:4567/ordermanagement/orders/${params.orderId}`)
    .then(function(data) {
      return data.data;
    });
  }
});
