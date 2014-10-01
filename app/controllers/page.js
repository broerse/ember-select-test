import Ember from "ember";
export default Ember.ObjectController.extend({
	isEditing: false,

  needs: ['modelnames'],
  eligibleMnames: function() {
    console.log("->>>",this.get('controllers.modelnames'));
    return this.get('controllers.modelnames');
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