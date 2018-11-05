const {Policy, model} = require ('@onehilltech/blueprint');

module.exports = Policy.extend ({
  failureCode: 'invalid_role',

  failureMessage: 'The user making the request does not have a valid role.',

  User: model ('user'),

  role: null,

  setParameters (role) {
    this.role = role
  },

  runCheck (req) {
    const selection = {_id: req.user._id, role: this.role};
    return this.User.findOne (selection).then (user => !!user);
  }

});
