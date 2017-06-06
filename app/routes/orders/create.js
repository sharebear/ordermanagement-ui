import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },
  actions: {
    saveOrder() {
      console.log(this.modelFor(this.routeName));
    }
  }
});
