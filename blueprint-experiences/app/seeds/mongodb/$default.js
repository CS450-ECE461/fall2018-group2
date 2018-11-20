const dab = require ('@onehilltech/dab');
const {Seed} = require ('@onehilltech/blueprint-mongodb');

module.exports = Seed.extend ({
  model () {
    return {
      users: [
        {firstName: 'Ali', lastName: 'Bert', role: ['host', 'visitor']},
        {firstName: 'Bella', lastName: 'Clara', role: ['visitor']},
        {firstName: 'Dylan', lastName: 'Eltz', role: ['visitor']},
        {firstName: 'Zoe', lastName: 'Ziran', role: ['admin']}
      ],

      native: [
        {name: 'native1', email: 'native1@experiences.com', scope: ['gatekeeper.client.create']}
      ],

      accounts: dab.map (dab.get ('users'), ((user, i) => {
        return {
          _id: user._id,
          username: `user${i}`,
          password: `user${i}`,
          email: `user${i}@experiences.com`
        }
      })),

      user_tokens: dab.map (dab.get ('accounts'), (account) => {
        return {
          client: dab.ref ('native.0'),
          account: account._id,
          refresh_token: dab.id ()
        }
      }),
    }
  }
});