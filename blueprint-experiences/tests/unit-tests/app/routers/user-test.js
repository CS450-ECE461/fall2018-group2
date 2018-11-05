const { request } = require ('@onehilltech/blueprint-testing');
const { seed } = require ('@onehilltech/blueprint-mongodb');

describe ('app | routers | user', function () {

  // Test CREATE and READ  methods on /v1/users
  describe ('/v1/users/', function () {
    describe ('POST', function () {});
    describe ('GET ALL', function () {});
  });

  // Test READ, UPDATE, and DELETE methods on a user with given id
  describe ('/v1/users/:userId', function () {
    describe ('GET', function () {});
    describe ('PUT', function () {});
    describe ('DELETE', function () {});
  });

});