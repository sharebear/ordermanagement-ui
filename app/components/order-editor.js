import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveOrder() {
      this.sendAction("saveOrder");
    },
    cancelEdit() {
      this.sendAction("cancelEdit");
    }
  }
});
