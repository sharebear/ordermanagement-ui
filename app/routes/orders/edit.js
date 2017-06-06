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
      let updateRequest = Object.assign({}, current);
      delete updateRequest.orderId;
      Ember.$.ajax(`http://localhost:4567/ordermanagement/orders/${current.orderId}/update-order`, {
        data: JSON.stringify({ data: updateRequest }),
        contentType: "application/json",
        method: "POST"
      })
      .done(() => {
        this.transitionTo("orders");
      });
    },
    cancelEdit() {
      history.back();
    }
  }
});
