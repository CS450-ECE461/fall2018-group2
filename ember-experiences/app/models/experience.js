import DS from 'ember-data';

export default DS.Model.extend({
  host: DS.belongsTo('user'),
  address: DS.attr(),
  title: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  start: DS.attr('number'),
  end: DS.attr('number'),
  avatarUrl: DS.attr('string')
});
