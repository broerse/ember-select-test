import Ember from "ember";
export default Ember.Route.extend({
	model: function() {
		return this.store.find('page');
	},
	afterModel: function (recordArray) {
    // This tells PouchDB to listen for live changes and
    // notify Ember Data when a change comes in.
    new PouchDB('selecttest').changes({
      since: 'now',
      live: true
    }).on('change', function () {
      recordArray.update();
    });
  }
});