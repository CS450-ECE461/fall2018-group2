const { Router } = require ('@onehilltech/blueprint');

module.exports = Router.extend ({
  specification: {
    '/bookings': {
      resource: {
        controller: 'booking'
      }
    }
  }
});
