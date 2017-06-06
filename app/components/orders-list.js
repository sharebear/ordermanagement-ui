import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newOrder() {
      this.sendAction("newOrder");
    }
  }
});
