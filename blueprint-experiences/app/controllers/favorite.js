const { ResourceController } = require ('@onehilltech/blueprint-mongodb');
const { model } = require ('@onehilltech/blueprint');
const { isEmpty } = require ('lodash');

module.exports = ResourceController.extend ({
  namespace: 'experiences',
  Model: model ('favorite'),

  getAll () {
    return this._super.call (this, ...arguments).extend ({
      schema: {
        user: {
          in: 'query',
          isMongoId: true,
          isLength: {
            options: { min: 1 }
          },

          toMongoId: true,
          optional: true
        }
      },

      getFilter(req, filter){
        return filter;
      }
    })
  }
});