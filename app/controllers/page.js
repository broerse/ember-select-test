import Ember from "ember";
export default Ember.Controller.extend({
	isEditing: false,
	
	modelnames: function() {
    return this.store.find('modelname');
  }.property()
});