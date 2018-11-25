import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { currentURL, click, visit } from '@ember/test-helpers';

module('Unit | Route | sign-in', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:sign-in');
    assert.ok(route);
  });

  test('it redirects to sign-up view when sign-up link is clicked', async function(assert) {
    await visit('/sign-in');
    await click('.sign-up-link');
    assert.equal(currentURL(), '/sign-up', 'should redirect to sign-up view');
  });
});
