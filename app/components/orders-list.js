import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showOrder(orderId) {
      alert(orderId);
    }
  }
});
