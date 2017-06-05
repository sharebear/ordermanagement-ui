import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.$.getJSON(`http://localhost:4567/ordermanagement/orders/${params.orderId}`)
    .then(function(data) {
      return data.data;
    });
  },
  actions: {
    saveOrder() {
      let current = this.modelFor(this.routeName);
      Ember.$.ajax(`http://localhost:4567/ordermanagement/orders/${current.orderId}/update-order`, {
        data: JSON.stringify({ data: current }),
        contentType: "application/json",
        method: "POST"
      })
      .done(function() {
        this.refresh();
      });
    }
  }
});
