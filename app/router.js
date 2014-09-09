import Ember from 'ember';

var Router = Ember.Router.extend({
	location: PagesENV.locationType
});

Router.map(function() {
	this.resource('pages', function() {
		this.resource('page', { path: ':page_id' });
	});
});

export default Router;
