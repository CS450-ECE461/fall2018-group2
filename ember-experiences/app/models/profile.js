import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  email: DS.attr(),
  photoUrl: DS.attr(),
  location: DS.attr(),
  phoneNumber: DS.attr(),
  bio: DS.attr(),

  reviews: DS.hasMany('review'),
  messages: DS.hasMany('message'),
});
