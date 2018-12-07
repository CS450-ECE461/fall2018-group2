const dab = require ('@onehilltech/dab');
const {Seed} = require ('@onehilltech/blueprint-mongodb');
const faker = require('faker');

const randomTitles = ['Cinderella Ride',
  'Explore the Room',
  'The Storyteller',
  'Hack 4 Science',
  'CSS for Dummies',
  'Segue With Me',
  'The Love Reunion VII',
  'Who Took The Rabbit?',
  'Cash Me Out Sight',
  'Pun Tuation',
  'Jungle Rodeo',
  'Bleu Competition',
  'The Klimber',
  'Soup Sunday',
  'Explore The Citadel',
  'Indy 11 Soccer',
  'The Infantry',
  'Time Run',
  'A Day of Titans',
  'Waterfall Jump Skate',
  'Free Candy',
  'Water Skating',
  'Motor Sliding',
];


const experienceImages = [
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149540/ventures/cooking-class.jpg",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149541/ventures/dogs.jpg",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149539/ventures/dog-hiking.jpg",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149539/ventures/dalmatians.jpg",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544189459/ventures/photographer-3672010_640.jpg",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149538/ventures/exercise-outdoors.jpg",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149541/ventures/bunny-hiking.png",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149538/ventures/hitch-hike.jpg",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149538/ventures/jump-rope.jpg",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149538/ventures/segues.jpg",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149537/ventures/yoga-stretch.jpg",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149537/ventures/home-dinner.jpg",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149537/ventures/tetris.jpg",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149537/ventures/human_tetris.jpg",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149536/ventures/yoha-again.jpg",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149534/ventures/meditate.jpg",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149537/ventures/yoga-stretch.jpg",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149537/ventures/tetris.jpg",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149538/ventures/segues.jpg",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149538/ventures/jump-rope.jpg",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149536/ventures/turtle.jpg",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149537/ventures/home-dinner.jpg",
  "https://res.cloudinary.com/ekletik-studios/image/upload/v1544149535/ventures/yoga-class.jpg"
];

module.exports = Seed.extend ({
  model () {
    return {
      users: [
        {first_name: 'Ali', last_name: 'Albert', roles: ['host', 'visitor']},
        {first_name: 'Zoe', last_name: 'Ziran', roles: ['admin']},
        {first_name: 'Mateus', last_name: 'Jose', roles: ['admin', 'host', 'visitor']},
        {first_name: 'Seth', last_name: 'Fuller', roles: ['admin', 'host', 'visitor']},
        {first_name: 'Leo', last_name: 'Neto', roles: ['admin, visitor']},
        {first_name: 'Zach', last_name: 'Balda', roles: ['admin', 'visitor']},
        {first_name: 'Jose', last_name: 'Cortez', roles: ['admin, visitor']}
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
          username: `${user.first_name}${user.last_name}`.toLowerCase(),
          password: `freecandy`,
          email: `${user.first_name}.${user.last_name}@experiences.com`.toLowerCase(),
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

        dab.times(3, function (index) {
          return {
            host: dab.ref('users.0'),
            address: {
              street: faker.address.streetAddress(),
              city: faker.address.city(),
              state: faker.address.state(),
              postalCode: faker.address.zipCode(),
              country: faker.address.country()
            },
            image: experienceImages[index],
            description: faker.lorem.paragraph(),
            title: randomTitles[index],
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
            image: experienceImages[index],
            description: faker.lorem.paragraph(),
            title: randomTitles[index+3],
            price: faker.commerce.price()/index
          }
        }),

        dab.times(2, function (index) {
          return {
            host: dab.ref('users.3'),
            address: {
              street: faker.address.streetAddress(),
              city: faker.address.city(),
              state: faker.address.state(),
              postalCode: faker.address.zipCode(),
              country: faker.address.country()
            },
            image: experienceImages[index+5],
            description: faker.lorem.paragraph(),
            title: randomTitles[index+5]
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
            image: experienceImages[index+7],
            description: faker.lorem.paragraph(),
            title: randomTitles[index],
            price: faker.commerce.price()*(index)
          }
        })
      ),

      favorites: dab.concat(

        // Seth likes first 4 experiences
        dab.times(4, function (i) {
          return { user: dab.ref(`users.3`), experience: dab.ref(`experiences.${i}`) }
        }),

        // Zach likes first 5 experiences
        dab.times(5, function (i) {
          return { user: dab.ref(`users.5`), experience: dab.ref(`experiences.${i}`) }
        }),

        // Leo likes first 3 experiences
        dab.times(3, function (i) {
          return { user: dab.ref(`users.4`), experience: dab.ref(`experiences.${i}`) }
        }),

        // 5 users like experiences #7 and #8
        dab.times(5, function (i) {
          return { user: dab.ref(`users.${i}`), experience: dab.ref(`experiences.6`) }
        }),
        dab.times(5, function (i) {
          return { user: dab.ref(`users.${i}`), experience: dab.ref(`experiences.7`) }
        }),
      ),

      bookings: dab.concat(

        // Mateus books first 3 experiences
        dab.times(3, function (i) {
          return { user: dab.ref(`users.2`), experience: dab.ref(`experiences.${i}`) }
        }),

        // Seth books first 4 experiences
        dab.times(4, function (i) {
          return { user: dab.ref(`users.3`), experience: dab.ref(`experiences.${i}`) }
        }),

        // Zach books first 4 experiences
        dab.times(4, function (i) {
          return { user: dab.ref(`users.5`), experience: dab.ref(`experiences.${i}`) }
        }),

        // 5 users book experience #7
        dab.times(5, function (i) {
          return { user: dab.ref(`users.${i}`), experience: dab.ref(`experiences.6`) }
        })
      ),

      reviews: dab.concat(

        dab.times(3, function (i) {
          return { rating: i, review: faker.lorem.words(), experience: dab.ref(`experiences.${i}`), user: dab.ref(`users.${i}`)}
        }),

        dab.times(3, function (i) {
          return { rating: i, review: faker.lorem.words(), experience: dab.ref(`experiences.3`), user: dab.ref(`users.${i}`)}
        }),

        dab.times(3, function (i) {
          return { rating: i, review: faker.lorem.words(), experience: dab.ref(`experiences.4`), user: dab.ref(`users.${i}`)}
        }),

        dab.times(5, function (i) {
          return { rating: i, review: faker.lorem.words(), experience: dab.ref(`experiences.6`), user: dab.ref(`users.${i}`)}
        }),
      )
    }
  }
});
