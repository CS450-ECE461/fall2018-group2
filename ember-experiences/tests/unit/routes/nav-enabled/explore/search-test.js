import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | nav-enabled/explore/search', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:nav-enabled/explore/search');
    assert.ok(route);
  });
});
