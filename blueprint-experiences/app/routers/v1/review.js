const { Router } = require ('@onehilltech/blueprint');

module.exports = Router.extend ({
  specification: {
    '/reviews': {
      resource: {
        controller: 'review'
      }
    }
  }
});
