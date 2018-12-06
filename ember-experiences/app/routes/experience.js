import Route from '@ember/routing/route';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';

export default Route.extend(Authenticated, {
  model(params) {
    return this.store.findRecord('experience', params.id);
  }
});
