import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('oculi');
  },
  actions: {
    selectOculi: function(oculi) {
      console.log("Clicked: " + oculi.get('type') + "-" + oculi.get('roughness') );
      Ember.$(".crafter-list").append("<p>"+ oculi.get('type') + "-" + oculi.get('roughness') +"</p>");
    }
  }
});
