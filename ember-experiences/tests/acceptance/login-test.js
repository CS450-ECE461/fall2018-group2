import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | login', function(hooks) {
  setupApplicationTest(hooks);

  test('should show dashboard as home page', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/dashboard', 'should redirect to dashboard');
  });

  test('should redirect to /register when registration link is clicked', async  function(assert) {
    await visit('/login');
    await click('.register-link');

    assert.equal(currentURL(), '/register', 'should redirect to register page');
  });
});
