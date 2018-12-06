import Route from '@ember/routing/route';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';
import { hash } from 'rsvp';

export default Route.extend(Authenticated, {
  model() {
    return hash({
      experiences: this.store.findAll('experience'),
      recommended: this.store.findAll('experience').then(function(experiences) {
        return experiences.get('firstObject');
      })
    });
  }
});
