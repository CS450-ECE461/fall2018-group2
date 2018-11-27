const { Router } = require('@onehilltech/blueprint');
const cors = require('cors');

module.exports = Router.extend({
  specification: {
    '/v1': {
      use: [cors ()]
    }
  }
});