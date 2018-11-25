const { model } = require ('@onehilltech/blueprint');
const { ResourceController } = require ('@onehilltech/blueprint-mongodb');

/**
 * @class user
 */
module.exports = ResourceController.extend({
  namespace: 'experiences',
  Model: model('user'),
});