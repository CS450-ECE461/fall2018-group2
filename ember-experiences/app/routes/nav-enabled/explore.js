import Route from '@ember/routing/route';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Route.extend(Authenticated, {
  model() {
    return [{
      host: {
        firstName: 'FirstName1',
        lastName: 'LastName1',
        roles: 'roles1'
      },
      address: {
        street: 'Experience 1 Street',
        city: 'City1',
        state: 'State1',
        postalCode: 'PostalCode1',
        country: 'Country1'
      },
      title: 'Experience 1 Title',
      description: 'Experience 1 description',
      price: 100,
      start: 1,
      end: 0
    }, {
      host: {
        firstName: 'FirstName2',
        lastName: 'LastName2',
        roles: 'roles2'
      },
      address: {
        street: 'Experience 2 Street',
        city: 'City2',
        state: 'State2',
        postalCode: 'PostalCode2',
        country: 'Country2'
      },
      title: 'Experience 2 Title',
      description: 'Experience 2 description',
      price: 200,
      start: 2,
      end: 20
    }]
    //return this.store.findAll('experience');
  }
});
