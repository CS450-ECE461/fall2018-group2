const { model } = require('@onehilltech/blueprint');
const { ResourceController } = require('@onehilltech/blueprint-mongodb');

/**
 * @class event
 */
module.exports = ResourceController.extend({
  namespace: 'experiences',
  model: model('event')
});