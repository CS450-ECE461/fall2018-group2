const blueprint = require('@onehilltech/blueprint');
const { Router } = require ('@onehilltech/blueprint');

/**
 * @class endpoint
 */
module.exports = Router.extend ({
  /// The router specification.
  specification: {
    '/gatekeeper': blueprint.mount('@onehilltech/blueprint-gatekeeper:v1'),

    '/v1': {
      policy: 'gatekeeper.auth.bearer'
    }

  }
});
