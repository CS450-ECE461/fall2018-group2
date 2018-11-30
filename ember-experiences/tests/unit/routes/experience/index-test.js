import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | experience/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:experience/index');
    assert.ok(route);
  });
});
