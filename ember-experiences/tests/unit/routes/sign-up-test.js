import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { currentURL, click, visit } from '@ember/test-helpers';

module('Unit | Route | sign-up', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:sign-up');
    assert.ok(route);
  });

  test('it redirects to sign-in view when sign-in link is clicked', async function(assert) {
    await visit('/sign-up');
    await click('.sign-in-link');
    assert.equal(currentURL(), '/sign-in', 'should redirect to sign-in view');
  });
});
