import DS from 'ember-data';

var Oculi = DS.Model.extend({
  type: DS.attr('string'),
  roughness: DS.attr('string'),
  formula: DS.attr('string'),
  weapon: DS.attr('string'),
  body: DS.attr('string'),
  accessory: DS.attr('string'),

  gemcolor: function(){
    return "oculi-" + this.get('type');
  }.property('type')
});

Oculi.reopenClass({
  FIXTURES: [
    {
      id: 1,
      type: 'sapphire',
      roughness: 'brilliant'
    },
    {
      id: 2,
      type: 'ruby',
      roughness: 'brilliant'
    }
  ]
});

export default Oculi;
