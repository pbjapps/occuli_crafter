import Ember from 'ember';
import OculiCrafter from '../app';

OculiCrafter.SelectableOculi = Ember.Component.extend({
  // TODO: Disable select if it's a princess stone...
  oculi: null,
  tagName: "span",
  click: function() {
    // console.log("Clicked: " + this.get('oculi.type') + "-" + this.get('oculi.roughness') );
    // console.log("Clicked: " + this.get('action') + " " + this.get('slot'));
    if(this.get('action') === "selectOculi"){
      this.sendAction('action', this.get('oculi'));
    }
    else if (this.get('action') === "deselectOculi"){
      this.sendAction('action', this.get('slot'));
    }
  },
  craftOculi: (function(){
    if(this.get('action') === "craftOculi"){
      this.sendAction('action');
    }
  }).on('init')
});

export default OculiCrafter.SelectableOculi;
