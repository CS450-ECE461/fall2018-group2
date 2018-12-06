import DS from 'ember-data';

export default DS.Model.extend({
  tag: DS.attr('string'),
  address: DS.attr(),
  title: DS.attr('string'),
  images: DS.attr(),
  price: DS.attr('number'),
  duration: DS.attr('number'),
  address: DS.attr('address'),
  description: DS.attr('string'),
  provided: DS.attr(),

  host: DS.belongsTo('user'),
  reviews: DS.hasMany('review')
});
