const { env } = require ('@onehilltech/blueprint');

module.exports = {
  connections: {
    $default: {
      uri: `mongodb://localhost/experiences_${env}`,
      seed: true,
      options: {

      }
    }
  }
};