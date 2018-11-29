const { model } = require('@onehilltech/blueprint');
const { ResourceController } = require('@onehilltech/blueprint-mongodb');

/**
 * @class experience
 */
module.exports = ResourceController.extend({
  namespace: 'experiences',
  Model: model('experience'),
});