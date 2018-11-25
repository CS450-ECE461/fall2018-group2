const { model } = require('@onehilltech/blueprint');
const { ResourceController } = require('@onehilltech/blueprint-mongodb');

/**
 * @class address
 */
module.exports = ResourceController.extend({
  namespace: 'experiences',
  model: model('address')
});