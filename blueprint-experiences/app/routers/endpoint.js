const blueprint = require('@onehilltech/blueprint');
const { Router } = require ('@onehilltech/blueprint');
const cors = require('cors');

/**
 * @class endpoint
 */

function origin(origin, callback) {
  console.log('Logged in...');
  return callback(null, true);
}

const corsOptions = {
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  origin
};


module.exports = exports  = {
  '/': {use: [cors(corsOptions)]},
  '/gatekeeper': blueprint.mount ('@onehilltech/blueprint-gatekeeper:v1'),
  '/v1': { policy: 'gatekeeper.auth.bearer'}
};