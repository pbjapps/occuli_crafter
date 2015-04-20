import DS from 'ember-data';
import OculiCrafter from '../app';

OculiCrafter.ApplicationAdapter = DS.FixtureAdapter.extend({
  queryFixtures: function(records, query, type) {
    var results = records.filter(function(record) {
      for(var key in query) {
        if (!query.hasOwnProperty(key)) { continue; }
        var value = query[key];
        if (record[key] !== value) { return false; }
      }
      return true;
    });
    return results;
  }
});

export default OculiCrafter.ApplicationAdapter;
