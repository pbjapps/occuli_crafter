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
      var formula = [];
      var noneCounter = 0;
      var crafterTree = this.controllerFor('oculis').get('crafter').constructor.crafterTree;

      if(this.controllerFor('oculis').get('crafter').get('slot1')){
        formula.push(this.controllerFor('oculis').get('crafter').get('slot1.type') + "_" + this.controllerFor('oculis').get('crafter').get('slot1.roughness'));
      } else{ noneCounter++; }
      if(this.controllerFor('oculis').get('crafter').get('slot2')){
        formula.push(this.controllerFor('oculis').get('crafter').get('slot2.type') + "_" + this.controllerFor('oculis').get('crafter').get('slot2.roughness'));
      } else{ noneCounter++; }
      if(this.controllerFor('oculis').get('crafter').get('slot3')){
        formula.push(this.controllerFor('oculis').get('crafter').get('slot3.type') + "_" + this.controllerFor('oculis').get('crafter').get('slot3.roughness'));
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
            var result = this.store.createRecord('oculi', {
              type: oculiType,
              roughness: oculiInfo.split("_")[2],
              weapon: 'Increase speed by 1/2/4/6.',
              body: 'Earn an additional 5%/10%/15%/20% XP from each battle.',
              accessory: 'Increase casting speed by 3%/6%/9%/12%.'
            });
            this.controllerFor('oculis').get('crafter').set('result', result);
            return true;
          }
        }
      }
      this.controllerFor('oculis').get('crafter').set('result', null);
    }
  }
});
