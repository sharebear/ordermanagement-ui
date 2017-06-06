import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },
  actions: {
    saveOrder() {
      let current = this.modelFor(this.routeName);
      current.services = ["PACKING"];
      if (current.comments === "") {
        current.comments = null;
      }
      Ember.$.ajax(`http://localhost:4567/ordermanagement/orders/create`, {
        data: JSON.stringify({ data: current }),
        contentType: "application/json",
        method: "POST"
      })
      .done(function() {
        this.transitionTo('orders');
      }.bind(this));
    },
    cancelEdit() {
      history.back();
    }
  }
});
