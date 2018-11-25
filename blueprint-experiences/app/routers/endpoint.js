const blueprint = require ('@onehilltech/blueprint');
const { Router } = blueprint;

module.exports = Router.extend ({
  specification: {
    '/gatekeeper': blueprint.mount ('@onehilltech/blueprint-gatekeeper:v1')

    // protecting the /v1 routes
    '/v1': {
      policy: 'gatekeeper.auth.bearer'
    }
  }
});
