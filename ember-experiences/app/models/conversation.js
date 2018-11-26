import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),

  members: DS.hasMany('profile'),
  messages: DS.hasMany('message'),

  experience: DS.belongsTo('experience')
});
