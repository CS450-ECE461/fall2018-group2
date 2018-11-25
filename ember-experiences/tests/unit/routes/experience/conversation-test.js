import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | experience/conversation', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:experience/conversation');
    assert.ok(route);
  });
});
