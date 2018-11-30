const { Router } = require ('@onehilltech/blueprint');

/**
 * @class user
 */
module.exports = Router.extend ({
  specification: {
    '/favorites': {
      resource: {
        controller: 'favorite'
      }
    }
  }
});