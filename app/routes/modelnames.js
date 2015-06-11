import Ember from "ember";
export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('modelname');
	},
	
	actions: {
	  edit: function() {
			this.controllerFor('modelname').set('isEditing', true);
		},

		doneEditing: function() {
			this.controllerFor('modelname').set('isEditing', false);
			this.modelFor('modelname').save();
		},
		
		deleteModelname: function() {
      this.modelFor('modelname').destroyRecord().then(function() {
        this.transitionTo('modelnames');
      }.bind(this));
    },

    createModelname: function() {
      this.send('edit');
      var newModelname = this.store.createRecord('modelname');
      newModelname.set('date' , new Date());
      this.transitionTo('modelname', newModelname.save());
    }
  }
});