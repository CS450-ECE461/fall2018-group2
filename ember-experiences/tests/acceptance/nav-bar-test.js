import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | nav bar', function(hooks) {
  setupApplicationTest(hooks);

  test('nav bar explore button re-routes to explore', async function(assert) {
    await visit('/explore');
    await click('.explore-nav-link');

    assert.equal(currentURL(), '/explore');
  });

  test('nav bar profiles button re-routes to profile', async function(assert) {
    await visit('/explore');
    await click('.profile-nav-link');

    assert.equal(currentURL(), '/profile');
  });

  test('nav bar experiences button re-routes to experiences', async function(assert) {
    await visit('/explore');
    await click('.experiences-nav-link');

    assert.equal(currentURL(), '/experiences');
  });
});
