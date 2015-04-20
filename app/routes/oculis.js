import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('oculi');
  },
  afterModel: function(oculis){
    var crafter = this.store.createRecord('crafter', {});
    this.controllerFor('oculis').set('crafter', crafter);
  },
  actions: {
    selectOculi: function(oculi) {
      // console.log("Clicked: " + oculi.get('type') + "-" + oculi.get('roughness') );
      Ember.$(".crafter-list").append("<p>"+ oculi.get('type') + "-" + oculi.get('roughness') +"</p>");
      if(!this.controllerFor('oculis').get('crafter').get('slot1')){
        this.controllerFor('oculis').get('crafter').set('slot1', oculi);
      }
      else if(!this.controllerFor('oculis').get('crafter').get('slot2')){
        this.controllerFor('oculis').get('crafter').set('slot2', oculi);
      }
      else if(!this.controllerFor('oculis').get('crafter').get('slot3')){
        this.controllerFor('oculis').get('crafter').set('slot3', oculi);
      }
    },
    deselectOculi: function(slot){
      this.controllerFor('oculis').get('crafter').set(slot, null);
    },
    craftOculi: function() {
      var result = this.store.createRecord('oculi', {
        type: 'diamond',
        roughness: 'brilliant',
        weapon: 'Increase speed by 1/2/4/6.',
        body: 'Earn an additional 5%/10%/15%/20% XP from each battle.',
        accessory: 'Increase casting speed by 3%/6%/9%/12%.'
      });
      this.controllerFor('oculis').get('crafter').set('result', result);
    }
  }
});
