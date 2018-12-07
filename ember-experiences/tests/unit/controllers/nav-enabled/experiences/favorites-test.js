import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | nav-enabled/experiences/favorites', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:nav-enabled/experiences/favorites');
    assert.ok(controller);
  });
});
