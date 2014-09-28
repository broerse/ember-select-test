import Ember from "ember";

export default Ember.ArrayController.extend({
  needs: ['page'],

  actions: {
    createPage: function() {
      this.get('controllers.page').send('edit');
      var newPage = this.get('store').createRecord('page');
      newPage.set('date' , new Date());
      this.get('target').transitionTo('page', newPage.save());
    }
  },
  sortProperties: ['title']
});