import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  bio: DS.attr('string'),
  email: DS.attr('string'),
  photo: DS.attr('string'),
  address: DS.attr(),
  roles: DS.attr(),

  fullName: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  }),

  reviews: DS.hasMany('review')
});
