import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

marked.setOptions({
  renderer: new marked.Renderer(),
  breaks: true
});

var App = Ember.Application.extend({
	modulePrefix: 'pages', // TODO: loaded via config
	Resolver: Resolver
});

loadInitializers(App, 'pages');

export default App;
