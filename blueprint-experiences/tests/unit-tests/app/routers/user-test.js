const { request } = require ('@onehilltech/blueprint-testing');
const { Seed } = require ('@onehilltech/blueprint-mongodb');

describe ('app | routers | user', function () {

  // -- Test CREATE and READ  methods on /v1/users
  describe ('/v1/users/', function () {

    describe ('GET ALL', function () {

      it ('should get all users', function () {
        return request()
          .get(`/v1/users`)
          .withUserToken(0)
          .expect(200);
      });
    });

    describe ('POST', function () {

      it ('should create a user profile', function () {
        const user = {
          first_name: "John",
          last_name: "Zoom",
          role: ['admin']
        };

        return request()
          .post(`/v1/users`)
          .withUserToken(0)
          .send({user})
          .expect(200);
      });

    });

  });
});