import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | login', function(hooks) {
  setupApplicationTest(hooks);

  test('should show dashboard as home page', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/dashboard', 'should redirect automatically');
  });
});
