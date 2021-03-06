const { Router } = require ('@onehilltech/blueprint');

/**
 * @class user
 */
module.exports = Router.extend ({
  /// The router specification.
  specification: {
    '/users': {
      resource: {
        controller: 'user',
      }
    }
  }
});
