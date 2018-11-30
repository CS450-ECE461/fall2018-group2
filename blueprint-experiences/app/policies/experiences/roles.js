const { Policy, model } = require ('@onehilltech/blueprint');

module.exports = Policy.extend ({
  failureCode: 'invalid_role',

  failureMessage: 'The user making the request does not have a valid role.',

  User: model ('user'),

  roles: null,

  setParameters (roles) {
    this.roles = roles
  },

  runCheck (req) {
    const selection = {_id: req.user._id, roles: this.roles};
    return this.User.findOne (selection).then (user => !!user);
  }

});
