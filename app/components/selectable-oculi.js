import Ember from 'ember';

OculiCrafter.SelectableOculi = Ember.Component.extend({
  // TODO: Disable select if it's a princess stone...
  oculi: null,
  tagName: "span",
  click: function() {
    // console.log("Clicked: " + this.get('oculi.type') + "-" + this.get('oculi.roughness') );
    this.sendAction('action', this.get('oculi'));
  }
});

export default OculiCrafter.SelectableOculi;
