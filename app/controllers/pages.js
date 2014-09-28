import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    createPage: function() {
      var newPage = this.get('store').createRecord('page');
      newPage.set('date' , new Date());
      this.get('target').transitionTo('page', newPage.save());
    }
  },
  sortProperties: ['title']
});