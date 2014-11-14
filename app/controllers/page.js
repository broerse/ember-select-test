import Ember from "ember";
export default Ember.ObjectController.extend({
	isEditing: false,

  modelnames: function() {
    return this.store.find('modelname');
  }.property(),
   
	actions: {
		edit: function() {
			this.set('isEditing', true);
		},

		doneEditing: function() {
			this.set('isEditing', false);
			this.get('model').save();
		},
		
		deletePage: function() {
      this.get('model').destroyRecord().then(function() {
        this.get('target').transitionTo('pages');
      }.bind(this));
    }
	}
});