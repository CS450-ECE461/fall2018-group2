const { request } = require ('@onehilltech/blueprint-testing');
const { seed } = require ('@onehilltech/blueprint-mongodb');

describe ('app | routers | user', function () {

  // -- Test CREATE and READ  methods on /v1/users
  describe ('/v1/users/', function () {

    describe ('GET ALL', function () {

      it ('should get all users', function () {
        return request()
          .get('/v1/users')
          .expect(200);
      });

    });

    describe ('POST', function () {

      it ('should create a user profile', function () {
        const user = {
          firstName: "Leo",
          lastName: "Neto",
          role: "admin"
        };

        return request()
          .post('/v1/users/')
          .send({user})
          .expect(200);
      });

    });

  });


  // -- Test READ, UPDATE, and DELETE methods on a user with given id
  describe ('/v1/users/:userId', function () {

    // -- Implement GET test

    // -- Implement PUT test

    // -- Implement DELETE test

  });

});