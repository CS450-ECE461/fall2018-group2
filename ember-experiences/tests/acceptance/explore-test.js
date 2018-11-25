import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | explore', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /explore', async function(assert) {
    await visit('/explore');

    assert.equal(currentURL(), '/explore');
  });

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/explore');
  });
});
