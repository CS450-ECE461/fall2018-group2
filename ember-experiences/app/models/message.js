import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  date: DS.attr('date'),

  conversation: DS.belongsTo('conversation'),
  user: DS.belongsTo('user')
});
