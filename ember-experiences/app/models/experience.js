import DS from 'ember-data';

export default DS.Model.extend({
  tag: DS.attr('string'),
  host: DS.belongsTo('user'),
  address: DS.attr(),
  title: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  start: DS.attr('number'),
  end: DS.attr('number'),
  image: DS.attr('string')
});
