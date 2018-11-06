import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | login', function(hooks) {
  setupApplicationTest(hooks);

  test('should show dashboard as home page', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/dashboard', 'should redirect to dashboard');
  });

  test('should redirect to /register when registration link is clicked from /login', async  function(assert) {
    await visit('/login');
    await click('.register-link');

    assert.equal(currentURL(), '/register', 'should redirect to register page');
  });

  test('should redirect to /login when login link is clicked from /register', async function(assert) {
    await visit('/register');
    await click('.login-link');

    assert.equal(currentURL(), '/login', 'should redirec to login page');
  });
});
