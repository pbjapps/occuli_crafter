import DS from 'ember-data';

var Crafter = DS.Model.extend({
  slot1: DS.belongsTo('oculi'),
  slot2: DS.belongsTo('oculi'),
  slot3: DS.belongsTo('oculi'),

  // isValidFormula: function(){
  //   if () {
  //     return true
  //   } else {
  //     return false
  //   }
  // }.property('slot1', 'slot2', 'slot3')
  
  // craftOculi: function(){
  //   return Oculi
  // }.property('slot1', 'slot2', 'slot3')

});

export default Crafter;
