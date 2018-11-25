const dab = require ('@onehilltech/dab');
const {Seed} = require ('@onehilltech/blueprint-mongodb');

module.exports = Seed.extend ({
  model () {
    return {
      users: [
        {firstName: 'Ali', lastName: 'Albert', role: ['host', 'visitor']},
        {firstName: 'Bella', lastName: 'Bulma', role: ['visitor']},
        {firstName: 'Delhi', lastName: 'Dhowry', role: ['host', 'visitor']},
        {firstName: 'Zoe', lastName: 'Ziran', role: ['admin']}
      ],

      native: [
        {name: 'native0', email: 'native1@experiences.com', scope: ['gatekeeper.client.create']}
      ],

      accounts: dab.map (dab.get ('users'), ((user) => {
        return {
          _id: user._id,
          username: `${user.firstName}${user.lastName}`.toLowerCase(),
          password: `${user.firstName}.${user.lastName}`.toLowerCase(),
          email: `${user.firstName}.${user.lastName}@experiences.com`.toLowerCase()
        }
      })),

      user_tokens: dab.map (dab.get ('accounts'), (account) => {
        return {
          client: dab.ref ('native.0'),
          account: account._id,
          refresh_token: dab.id()
        }
      }),

      experiences: [
        {
          host: dab.ref('users.0'),
          address: {
            street: '450 Northeast St',
            city: 'Indianapolis',
            state: 'Indiana',
            postalCode: '46200',
            country: 'United States'
          },
          description: 'An event for all family and more.',
          details: 'An event for all family and more.'
        },
        {
          host: dab.ref('users.1'),
          address: {
            street: '900 N Rose Avenue',
            city: 'Bloomington',
            state: 'Indiana',
            postalCode: '47400',
            country: 'United States'
          },
          description: 'Superb adventures from countryside rides to riverwalks',
          details: 'Superb adventures from countryside rides to riverwalks'
        }
      ],

      events: [
        {
          experience: dab.ref('experiences.0'),
          start: '2018-02-10',
          end: '2018-02-10',
        },
        {
          experience: dab.ref('experiences.0'),
          start: '2018-02-12',
          end: '2018-02-12',
        },
        {
          experience: dab.ref('experiences.1'),
          start: '2018-02-20',
          end: '2018-02-21',
        }
      ]
    }
  }
});