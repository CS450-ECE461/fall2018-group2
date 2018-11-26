const { env } = require ('@onehilltech/blueprint');

module.exports = {
  connections: {
    $default: {
      uri: `mongodb://localhost/experiences_${env}`,
      seed: true,
      options: {
        readPreference: 'primary',
        forceServerObjectId: false,
        w: 1,
        autoReconnect: true,
        keepAlive: 1,
        poolSize: 5
      }
    }
  }
};