const { Router } = require ('@onehilltech/blueprint');

/**
 * @class experience
 */
module.exports = Router.extend ({
  /// The router specification.
  specification: {
    '/experiences': {
      resource: {
        controller: 'experience',
      }
    }
  }
});
