import Ember from "ember";

export default Ember.ArrayController.extend({
  needs: ['modelname'],

  actions: {
    createModelname: function() {
      this.get('controllers.modelname').send('edit');
      var newModelname = this.get('store').createRecord('modelname');
      this.get('target').transitionTo('modelname', newModelname.save());
    }
  },
  sortProperties: ['modelname']
});