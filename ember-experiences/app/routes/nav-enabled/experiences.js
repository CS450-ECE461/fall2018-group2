import Route from '@ember/routing/route';
import Authenticated from 'ember-cli-gatekeeper/mixins/authenticated';
import { hash } from 'rsvp';

export default Route.extend(Authenticated, {
  model() {

    // Gatekeeper user account id
    let currentUser = this.get('currentUser');

    return hash({
      bookings: this.store.query('booking', { user: currentUser.id }),
      favorites: this.store.query('favorite', { user: currentUser.id })
    });
  }
});
