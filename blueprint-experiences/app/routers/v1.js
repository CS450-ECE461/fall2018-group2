const { cors } = require ('@onehilltech/blueprint-gatekeeper');

module.exports = {
  '/v1': {
    use: [cors ()]
  }
};
