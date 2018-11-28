const { Router } = require ('@onehilltech/blueprint');

/**
 * @class event
 */
module.exports = Router.extend ({
  /// The router specification.
  specification: {
    '/events': {
      resource: {
        controller: 'event',
      }
    }
  }
});
