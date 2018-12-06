import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  tag: DS.attr('string'),
  price: DS.attr('number'),
  duration: DS.attr('number'),
  images: DS.attr(),
  description: DS.attr('string'),

  provided: DS.attr(),
  address: DS.attr(),

  host: DS.belongsTo('user'),
  reviews: DS.hasMany('review')
});
