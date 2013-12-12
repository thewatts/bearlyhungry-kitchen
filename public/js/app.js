App = Ember.Application.create();

// Store
App.ApplicationAdapter = DS.FixtureAdapter;

App.Order = DS.Model.extend({});
App.OrderItem = DS.Model.extend({});
