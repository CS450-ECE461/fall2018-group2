import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  details: DS.attr('string'),
  address: DS.attr('address'),
  host: DS.belongsTo('user'),
});
