const { Router } = require ('@onehilltech/blueprint');

/**
 * @class users
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
