const dab = require ('@onehilltech/dab');
const {Seed} = require ('@onehilltech/blueprint-mongodb');
const faker = require('faker');

module.exports = Seed.extend ({
  model () {
    return {
      users: [
        {firstName: 'Ali', lastName: 'Albert', roles: ['host', 'visitor']},
        {firstName: 'Zoe', lastName: 'Ziran', roles: ['admin']},
        {firstName: 'Mateus', lastName: 'Jose', roles: ['admin', 'host', 'visitor']},
        {firstName: 'Seth', lastName: 'Fuller', roles: ['admin', 'host', 'visitor']},
        {firstName: 'Leo', lastName: 'Neto', roles: ['admin, visitor']},
        {firstName: 'Zach', lastName: 'Balda', roles: ['admin', 'visitor']},
        {firstName: 'Jose', lastName: 'Cortez', roles: ['admin, visitor']}
      ],

      native: [
        {
          name: 'native0',
          _id: dab.id('5bfdac113d1a786188a3dabc'),
          client_secret: 'experiences-app',
          email: 'native1@experiences.com',
          scope: ['gatekeeper.account.create']
        }
      ],

      accounts: dab.map (dab.get ('users'), ((user) => {
        return {
          _id: user._id,
          username: `${user.firstName}${user.lastName}`.toLowerCase(),
          password: `freecandy`,
          email: `${user.firstName}.${user.lastName}@experiences.com`.toLowerCase(),
          scope: ['gatekeeper.account.create']
        }
      })),

      user_tokens: dab.map (dab.get ('accounts'), (account) => {
        return {
          client: dab.ref ('native.0'),
          account: account._id,
          refresh_token: dab.id(),
          scope: ['gatekeeper.account.created']
        }
      }),

      client_tokens: [
        {
          client: dab.ref('native.0'),
          account: dab.ref('accounts.0'),
          refresh_token: dab.id(),
          scope: ['gatekeeper.account.created']

        }
      ],

      experiences: dab.concat (

        dab.times(3, function () {
          return {
            host: dab.ref('users.0'),
            address: {
              street: faker.address.streetAddress(),
              city: faker.address.city(),
              state: faker.address.state(),
              postalCode: faker.address.zipCode(),
              country: faker.address.country()
            },
            description: faker.lorem.paragraph(),
            title: faker.lorem.words(),
            price: faker.commerce.price()
          }
        }),

        dab.times(5, function (index) {
          return {
            host: dab.ref('users.2'),
            address: {
              street: faker.address.streetAddress(),
              city: faker.address.city(),
              state: faker.address.state(),
              postalCode: faker.address.zipCode(),
              country: "United States"
            },
            description: faker.lorem.paragraph(),
            title: faker.lorem.words(),
            price: faker.commerce.price()/index
          }
        }),

        dab.times(2, function () {
          return {
            host: dab.ref('users.3'),
            address: {
              street: faker.address.streetAddress(),
              city: faker.address.city(),
              state: faker.address.state(),
              postalCode: faker.address.zipCode(),
              country: faker.address.country()
            },
            description: faker.lorem.paragraph(),
            title: faker.lorem.words()
          }
        }),

        dab.times(4, function (index) {
          return {
            host: dab.ref('users.3'),
            address: {
              street: faker.address.streetAddress(),
              city: faker.address.city(),
              state: faker.address.state(),
              postalCode: faker.address.zipCode(),
              country: faker.address.country()
            },
            description: faker.lorem.paragraph(),
            title: faker.lorem.words(),
            price: faker.commerce.price()/index
          }
        })
      ),

      favorites: dab.concat(

        // Seth likes first 4 experiences
        dab.times(4, function (i) {
          return { user: dab.ref(`users.3`), experience: dab.ref(`experiences.${i}`) }
        }),

        // Leo likes first 3 experiences
        dab.times(3, function (i) {
          return { user: dab.ref(`users.4`), experience: dab.ref(`experiences.${i}`) }
        }),

        // All users like experiences #7, and #8
        dab.times(5, function (i) {
          return { user: dab.ref(`users.${i}`), experience: dab.ref(`experiences.6`) }
        }),
        dab.times(5, function (i) {
          return { user: dab.ref(`users.${i}`), experience: dab.ref(`experiences.7`) }
        }),
      )
    }
  }
});