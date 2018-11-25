import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | explore', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:nav-enabled.explore');
    assert.ok(route);
  });
});
