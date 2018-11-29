import Route from '@ember/routing/route';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Route.extend(Authenticated, {
  model() {
    return [{
      description: 'Experience 1 description',
      details: 'Experience 1 details',
      address: 'Experience 1 address',
      host: 'Experience 1 host',
    }, {
      description: 'Experience 2 description',
      details: 'Experience 2 details',
      address: 'Experience 2 address',
      host: 'Experience 2 host',
    }, {
      description: 'Experience 3 description',
      details: 'Experience 3 details',
      address: 'Experience 3 address',
      host: 'Experience 3 host',
    }, {
      description: 'Experience 4 description',
      details: 'Experience 4 details',
      address: 'Experience 4 address',
      host: 'Experience 4 host',
    }];
    //return this.store.findAll('experience');
  }
});
