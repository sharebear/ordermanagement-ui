# ordermanagement-ui

## Description

Ember.js based SPA on top of ordermanagement-api in order to implement the use-cases;

1. As a sales consultant, I want to place an order for a customer
2. As a sales consultant, I want to find an order that I've previously placed for a customer.
3. As a sales consultant, I want to edit an order that I've previously placed for a customer.
4. As a sales consultant, I want to delete an order that I've previously placed for a customer.

I chose Ember.js as I was looking for a "batteries-included" framework to get started quickly rather than spending days choosing and configuring components from the React ecosystem.

## Status

Of the use-cases;

1. Is almost complete, but not yet handling mapping from UI to a list of strings
2. Depending on your interpretation, there is currently a list over all orders but no drill-down/filter on customer.
3. Soon to be refactored in by creating a component of the create form
4. Not yet started.

## General notes

* GUI is ugly, I started to incorporate a material design library but this work is not finished
* Unfortunately I ran out of time for making Ember.Data play nicely with my API design, currently API calls are hardcoded in the routes, these should at least be pulled out to a service if I can't fix Ember.Data.
* No efffort put into testing, this was my first Ember.js project, I was more in experimental mode than grinding out code mode... the latter is better suited to focussing on unit tests.
* No effort has been put in to validations.
* Would have liked to have created a docker image of the results here but alas, ran out of time.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [ordermanagment-api](https://github.com/sharebear/ordermanagement-api) available on http://localhost:4567

## Installation

* `git clone <repository-url>` this repository
* `cd ordermanagement-ui`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Building

* `ember build` (development)
* `ember build --environment production` (production)
