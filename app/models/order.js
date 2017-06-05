import DS from 'ember-data';

export default DS.Model.extend({
  orderId: DS.attr(),
  version: DS.attr(),
  name: DS.attr(),
  phoneNumber: DS.attr(),
  email: DS.attr(),
  fromAddress: DS.attr(),
  toAddress: DS.attr(),
  services: DS.attr(),
  executionDate: DS.attr(),
  comments: DS.attr()
});
