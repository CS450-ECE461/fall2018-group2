import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  tag: DS.attr(),
  cost: DS.attr(),
  duration: DS.attr(),
  photos: DS.attr(),
  details: DS.attr(),
  provided: DS.attr(),
  address: DS.attr(),
  photos: DS.hasMany(),

  reviews: DS.hasMany('review-experience'),
  conversations: DS.hasMany('conversation'),

  host: DS.belongsTo('profile'),
});
