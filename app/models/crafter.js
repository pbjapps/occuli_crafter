import DS from 'ember-data';

var Crafter = DS.Model.extend({
  slot1: DS.belongsTo('oculi'),
  slot2: DS.belongsTo('oculi'),
  slot3: DS.belongsTo('oculi'),
  result: DS.belongsTo('oculi'),

  isValidFormula: function(){
    console.log("type : " + this.get('slot1.type') + this.get('slot2.type') + this.get('slot3.type'));
    var formula = [this.get('slot1.type'), this.get('slot2.type'), this.get('slot3.type')];
    if ($.inArray( "sapphire", formula) !== -1 && $.inArray( "ruby", formula) !== -1  && $.inArray( "emerald", formula) !== -1) {
      return true;
    } else {
      return false;
    }
  }.property('slot1', 'slot2', 'slot3')

  // craftOculi: function(){
  //   return Oculi
  // }.property('slot1', 'slot2', 'slot3')

});

export default Crafter;
