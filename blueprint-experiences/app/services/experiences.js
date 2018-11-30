const { Service, computed } = require ('@onehilltech/blueprint');

/**
 * @class experiences
 */
module.exports = Service.extend ({
  _experiences: null,

  experiences: computed ({
    get () { return this._experiences; }
  }),

  init () {
    this._super.call (this, ...arguments);

    this._experiences = [
      {
        type: 'experiences',
        id: 100,
        host: "Ali Albert",
        address: {
          street: '450 Northeast St',
          city: 'Indianapolis',
          state: 'Indiana',
          postalCode: '46200',
          country: 'United States'
        },
        description: 'An event for all family and more.',
        title: 'Family night out'
      },
      {
        type: 'experiences',
        id: 200,
        host: "Zoe Ziran",
        address: {
          street: '900 N Rose Avenue',
          city: 'Bloomington',
          state: 'Indiana',
          postalCode: '47400',
          country: 'United States'
        },
        description: 'Superb adventures from countryside rides to riverwalks',
        title: 'Superb adventure'
      },
      {
        type: 'experiences',
        id: 300,
        host: "Maya Sullivan",
        address: {
          street: '900 N Rose Avenue',
          city: 'Glendale',
          state: 'Idaho',
          postalCode: '47402',
          country: 'United States'
        },
        description: 'Superb adventures from countryside rides to riverwalks',
        title: 'Rides and riverwalks'
      },
      {
        type: 'experiences',
        id: 400,
        host: "J. Simons",
        address: {
          street: '900 N Rose Avenue',
          city: 'Denver',
          state: 'Colorado',
          postalCode: '67402',
          country: 'United States'
        },
        description: 'Superb adventures from countryside rides to riverwalks',
        title: 'Countryside lake'
      }
    ]
  },

  get (id) {
    return this._experiences.find(experience => experience.id === id);
  },

  add (experience) {
    return this._experiences.push(experience);
  },

  remove (id) {
    let index = this._experiences.findIndex(experience => experience.id === id);

    if (index === -1) { return false; }

    this._experiences.slice(index, 1);
    return true;
  }

});
