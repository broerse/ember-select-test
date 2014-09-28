import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('pages', function() {
		this.resource('page', { path: ':page_id' });
	});
	this.resource('modelnames', function() {
		this.resource('modelname', { path: ':modelname_id' });
	});
});

export default Router;
