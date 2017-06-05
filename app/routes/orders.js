import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
      "orderId": "4d11faf4-e287-4339-9f25-5786b1630ea9",
      "version": 1,
      "name": "Jonathan Share",
      "phoneNumber": "98989898",
      "email": "jonny@sharebear.co.uk",
      "fromAddress": "Someplace",
      "toAddress": "Someplace else",
      "services": [
        "PACKING"
      ],
      "executionDate": "2017-04-01",
      "comments": null
    },
    {
      "orderId": "c4c988e3-5536-437c-8ce5-695207b7b5e5",
      "version": 1,
      "name": "Another customer",
      "phoneNumber": "98989898",
      "email": "jonny@sharebear.co.uk",
      "fromAddress": "Someplace",
      "toAddress": "Someplace else",
      "services": [
        "PACKING"
      ],
      "executionDate": "2017-04-01",
      "comments": null
    }
    ]
  }
});
