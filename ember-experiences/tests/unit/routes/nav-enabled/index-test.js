import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | nav-enabled/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:nav-enabled/index');
    assert.ok(route);
  });
});