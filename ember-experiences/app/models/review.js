import DS from 'ember-data';

export default DS.Model.extend({
  timestamp: DS.attr('date'),
  rating: DS.attr('number'),
  review: DS.attr('string'),

  experience: DS.belongsTo('experience'),
  reviewer: DS.belongsTo('user')
});
