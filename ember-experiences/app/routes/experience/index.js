import Route from '@ember/routing/route';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Route.extend(Authenticated, {
  model() {
    return {
      tag: 'default-experience',
      host: {
        firstName: 'FirstName1',
        lastName: 'LastName1',
        roles: 'roles1'
      },
      address: {
        street: '13498 Rainbow Road',
        city: 'Indianapolis',
        state: 'IN',
        postalCode: '46204',
        country: 'Country'
      },
      title: 'Experience Title',
      description: 'Experience 1 description',
      price: 100,
      start: 1,
      end: 0
    }
  }
});
