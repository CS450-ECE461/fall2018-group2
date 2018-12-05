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
      end: 10,
      avatarUrl: "/assets/images/jump-rope.jpg"
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
      end: 20,
      avatarUrl: "/assets/images/turtle.jpg"
    }, {
      host: {
        firstName: 'FirstName3',
        lastName: 'LastName3',
        roles: 'roles3'
      },
      address: {
        street: 'Experience 3 Street',
        city: 'City3',
        state: 'State3',
        postalCode: 'PostalCode3',
        country: 'Country3'
      },
      title: 'Experience 3 Title',
      description: 'Experience 3 description',
      price: 300,
      start: 3,
      end: 30,
      avatarUrl: "/assets/images/jump-rope.jpg"
    }, {
      host: {
        firstName: 'FirstName4',
        lastName: 'LastName4',
        roles: 'roles4'
      },
      address: {
        street: 'Experience 4 Street',
        city: 'City4',
        state: 'State4',
        postalCode: 'PostalCode4',
        country: 'Country4'
      },
      title: 'Experience 4 Title',
      description: 'Experience 4 description',
      price: 400,
      start: 4,
      end: 40,
      avatarUrl: "/assets/images/turtle.jpg"
    }]
    //return this.store.findAll('experience');
  }
});
