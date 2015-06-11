import Ember from "ember";
export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('page');
	},
	
  actions: {
	  edit: function() {
			this.controllerFor('page').set('isEditing', true);
		},

		doneEditing: function() {
			this.controllerFor('page').set('isEditing', false);
			this.modelFor('page').save();
		},
		
		deletePage: function() {
      this.modelFor('page').destroyRecord().then(function() {
        this.transitionTo('pages');
      }.bind(this));
    },

    createPage: function() {
      this.send('edit');
      var newPage = this.store.createRecord('page');
      newPage.set('date' , new Date());
      this.transitionTo('page', newPage.save());
    }
  }
});