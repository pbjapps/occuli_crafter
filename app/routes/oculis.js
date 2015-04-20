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
      var formula = [];
      var noneCounter = 0;
      var crafter = this.controllerFor('oculis').get('crafter');
      var crafterTree = crafter.constructor.crafterTree;

      if(crafter.get('slot1')){
        formula.push(crafter.get('slot1.type') + "_" + crafter.get('slot1.roughness'));
      } else{ noneCounter++; }
      if(crafter.get('slot2')){
        formula.push(crafter.get('slot2.type') + "_" + crafter.get('slot2.roughness'));
      } else{ noneCounter++; }
      if(crafter.get('slot3')){
        formula.push(crafter.get('slot3.type') + "_" + crafter.get('slot3.roughness'));
      } else{ noneCounter++; }

      for(var i = 0; i < noneCounter; i++){
        formula.push("none");
      }

      var ct1, ct2, oculiInfo;
      ct1 = crafterTree[formula[0]];
      if(ct1){
        ct2 = ct1[formula[1]];
        if(ct2){
          oculiInfo = ct2[formula[2]];
          if(oculiInfo){
            var oculiType = oculiInfo.split("_")[1];
            if(oculiType === "princess"){
              oculiType = "princess stone";
            }

            this.store.find('oculi', {
                type: oculiType,
                roughness: oculiInfo.split("_")[2]
            }).then(function(craftedOculi) {
              crafter.set('result', craftedOculi.get('content')[0]);
            });

            return true;
          }
        }
      }
      crafter.set('result', null);
    }
  }
});
