import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('orders', function() {
    this.route('edit', { path: '/:orderId'});
    this.route('create');
  });
});

export default Router;
