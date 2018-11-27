const blueprint = require('@onehilltech/blueprint');
const { Router } = require ('@onehilltech/blueprint');

/**
 * @class endpoint
 */
module.exports = Router.extend ({
  specification: {
    '/gatekeeper': blueprint.mount ('@onehilltech/blueprint-gatekeeper:v1')

    // protecting the /v1 routes
    '/v1': {
      policy: 'gatekeeper.auth.bearer'
    }
  }
});