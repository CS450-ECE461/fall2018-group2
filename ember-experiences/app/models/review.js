import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr('number'),
  description: DS.attr('string'),
  date: DS.attr('date'),

  reviewer: DS.belongsTo('profile')
});
