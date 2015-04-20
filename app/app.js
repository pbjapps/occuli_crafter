import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import DS from 'ember-data';

var OculiCrafter;

Ember.MODEL_FACTORY_INJECTIONS = true;

OculiCrafter = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

OculiCrafter.Store = DS.Store.extend({
  adapter: 'Fixture'
});

loadInitializers(OculiCrafter, config.modulePrefix);

export default OculiCrafter;
