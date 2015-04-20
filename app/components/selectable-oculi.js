import Ember from 'ember';
import OculiCrafter from '../app';

OculiCrafter.SelectableOculi = Ember.Component.extend({
  // TODO: Disable select if it's a princess stone...
  oculi: null,
  tagName: "span",
  click: function() {
    if(this.get('action') === "selectOculi"){
      this.sendAction('action', this.get('oculi'));
    }
    else if (this.get('action') === "deselectOculi"){
      this.sendAction('action', this.get('slot'));
    }
  },
  craftOculi: function(){
    if(this.get('action') === "craftOculi"){
      this.sendAction('action');
    }
  },
  slotChanged: (function() {
    Ember.run.once(this, 'craftOculi');
  }).observes('crafter.slot1', 'crafter.slot2', 'crafter.slot3')
});

export default OculiCrafter.SelectableOculi;
