import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr('number'),
  review: DS.attr('string'),
  experience: DS.belongsTo('experience'),
  user: DS.belongsTo('user')
});
