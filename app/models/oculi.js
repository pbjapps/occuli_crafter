import DS from 'ember-data';

var Oculi = DS.Model.extend({
  type: DS.attr('string'),
  roughness: DS.attr('string'),
  formula: DS.attr('string'),
  weapon: DS.attr('string'),
  body: DS.attr('string'),
  accessory: DS.attr('string'),

  gemcolor: (function(){
    return "oculi-" + this.get('type');
  }).property('type'),

  equipBonus: (function(type, roughness) {
    // TODO: build a equipMap JS object such that the following is true:
    // equipMap['sapphire']['brilliant']['weapon'] = "16%"
    // equipMap['sapphire']['brilliant']['body'] = "24%"
    // equipMap['sapphire']['brilliant']['accessory'] = "20%"
    return "-";
  }).property(['type', 'roughness'])

});

Oculi.reopenClass({
  FIXTURES: [
    {
      id: 1,
      type: 'sapphire',
      roughness: 'brilliant',
      weapon: 'Add Water damage to melee attacks. Tumbled and above: Increase attack power by 8%/12%/16%.',
      body: 'Increase Water damage resistance by 8%/14%/18%/24%.',
      accessory: 'Additional +5%/10%/15%/20% chance of evading an attack while casting.'
    },
    {
      id: 2,
      type: 'ruby',
      roughness: 'brilliant',
      weapon: 'Add Fire damage to melee attacks. Tumbled and above: Increase attack power by 8%/12%/16%.',
      body: 'Increase Fire damage resistance by 8%/14%/18%/24%.',
      accessory: '+4/8/12/16 Max HP.'
    },
    {
      id: 3,
      type: 'emerald',
      roughness: 'brilliant',
      weapon: 'Add Lightning damage to melee attacks. Tumbled and above: Increase attack power by 8%/12%/16%',
      body: 'Increase Earth damage resistance by 8%/14%/18%/24%.',
      accessory: '+2/4/6/8 Max MP.'
    },
    {
      id: 4,
      type: 'tourmaline',
      roughness: 'brilliant',
      weapon: 'Attacks have a 5%/10%/15%/20% chance to cause paralysis for 3/4/5/6 seconds.',
      body: 'Reduce magical damage by 5%10%/15%/20%.',
      accessory: 'Increase magic by 2/4/6/8.'
    },
    {
      id: 5,
      type: 'amethyst',
      roughness: 'brilliant',
      weapon: 'Increase physical damage by 20%/20%/30%/30% when HP drops below 20%/30%/20%/30%.',
      body: 'Reduce physical damage by 5%/10%/15%/20%.',
      accessory: 'Increase magical damage by 20%/20%/30%/30% when HP drops below 20%/30%/20%/30%.'
    },
    {
      id: 6,
      type: 'citrine',
      roughness: 'brilliant',
      weapon: 'Add Light damage to melee attacks. Tumbled and above: Increase attack power by 10%/15%/20%.',
      body: 'Increase chance of dodging by 5%/10%/15%/20% when defending for 1 turn.',
      accessory: 'Increase by 5%/10%/15%/20% the chance to bump the targeted enemy backward on the Timeline.'
    },
    {
      id: 7,
      type: 'diamond',
      roughness: 'brilliant',
      weapon: 'Increase speed by 1/2/4/6.',
      body: 'Earn an additional 5%/10%/15%/20% XP from each battle.',
      accessory: 'Increase casting speed by 3%/6%/9%/12%.'
    },
    {
      id: 8,
      type: 'onyx',
      roughness: 'brilliant',
      weapon: 'Increase spell power by 10%/15%/20%/25%.',
      body: 'Reduce damage received by 20%/20%/30%/30% when HP drops below 20%/30%/20%/30%.',
      accessory: 'Increase chance of dodging by 20%/20%/30%/30% while casting when HP drops below 20%/30%/20%/30%.'
    },
    {
      id: 9,
      type: 'spinel',
      roughness: 'brilliant',
      weapon: 'Increase attack power by 15%/20%25%30%.',
      body: 'Increase speed by 10%/20%/30%/40% for 1 turn when interrupted.',
      accessory: 'Begin every turn 5%/10%/25%/30% forward on the Timeline.'
    },
    {
      id: 10,
      type: 'princess stone',
      roughness: 'brilliant',
      weapon: 'Increase attack power by 40%.',
      body: 'Reduce physical and magical damage by 25%.',
      accessory: 'Increase spell power by 35%.'
    }
  ]
});

export default Oculi;
