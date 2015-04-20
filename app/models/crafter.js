import DS from 'ember-data';

var Crafter = DS.Model.extend({
  slot1: DS.belongsTo('oculi'),
  slot2: DS.belongsTo('oculi'),
  slot3: DS.belongsTo('oculi'),
  result: DS.belongsTo('oculi'),

  isValidFormula: function(){
    var crafterTree = this.constructor.crafterTree;
    var formula = [];
    var noneCounter = 0;
    var ct1, ct2, result;

    if(this.get('slot1')){
      formula.push(this.get('slot1.type') + "_" + this.get('slot1.roughness'));
    } else{ noneCounter++; }
    if(this.get('slot2')){
      formula.push(this.get('slot2.type') + "_" + this.get('slot2.roughness'));
    } else{ noneCounter++; }
    if(this.get('slot3')){
      formula.push(this.get('slot3.type') + "_" + this.get('slot3.roughness'));
    } else{ noneCounter++; }

    for(var i = 0; i < noneCounter; i++){
      formula.push("none");
    }

    ct1 = crafterTree[formula[0]];
    if(ct1){
      ct2 = ct1[formula[1]];
      if(ct2){
        result = ct2[formula[2]];
        if(result){
          return true;
        }
      }
    }
    return false;
  }.property('slot1', 'slot2', 'slot3')

});

Crafter.reopenClass({
  crafterTree: {
    "sapphire_brilliant": {
      "emerald_brilliant": {
        "none": "$_tourmaline_brilliant",
        "ruby_brilliant": "$_diamond_brilliant"
      },
      "ruby_brilliant": {
        "none": "$_amethyst_brilliant",
        "emerald_brilliant": "$_diamond_brilliant"
      }
    },
    "ruby_brilliant": {
      "sapphire_brilliant": {
        "none": "$_amethyst_brilliant",
        "emerald_brilliant": "$_diamond_brilliant"
      },
      "emerald_brilliant": {
        "none": "$_citrine_brilliant",
        "sapphire_brilliant": "$_diamond_brilliant"
      }
    },
    "emerald_brilliant": {
      "ruby_brilliant": {
        "none": "$_citrine_brilliant",
        "sapphire_brilliant": "$_diamond_brilliant"
      },
      "sapphire_brilliant": {
        "none": "$_tourmaline_brilliant",
        "ruby_brilliant": "$_diamond_brilliant"
      }
    },
    "amethyst_brilliant": {
      "tourmaline_brilliant": {
        "citrine_brilliant": "$_onyx_brilliant"
      },
      "citrine_brilliant": {
        "tourmaline_brilliant": "$_onyx_brilliant"
      }
    },
    "tourmaline_brilliant": {
      "amethyst_brilliant": {
        "citrine_brilliant": "$_onyx_brilliant"
      },
      "citrine_brilliant": {
        "amethyst_brilliant": "$_onyx_brilliant"
      }
    },
    "citrine_brilliant": {
      "tourmaline_brilliant": {
        "amethyst_brilliant": "$_onyx_brilliant"
      },
      "amethyst_brilliant": {
        "tourmaline_brilliant": "$_onyx_brilliant"
      }
    },
    "diamond_brilliant": {
      "onyx_brilliant": {
        "none": "$_spinel_brilliant",
        "spinel_brilliant": "$_princess_brilliant"
      },
      "spinel_brilliant": {
        "onyx_brilliant": "$_princess_brilliant"
      }
    },
    "onyx_brilliant": {
      "diamond_brilliant": {
        "none": "$_spinel_brilliant",
        "spinel_brilliant": "$_princess_brilliant"
      },
      "spinel_brilliant": {
        "diamond_brilliant": "$_princess_brilliant"
      }
    },
    "spinel_brilliant": {
      "diamond_brilliant": {
        "onyx_brilliant": "$_princess_brilliant"
      },
      "onyx_brilliant": {
        "diamond_brilliant": "$_princess_brilliant"
      }
    }
  }
});

export default Crafter;
