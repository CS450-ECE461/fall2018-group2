const mongodb = require ('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;

const userSchema = new Schema ({
  firstName: {type: String, required: true, trim: true, default: 'New'},

  lastName: {type: String, required: true, trim: true, default: 'User'},

  role: [{type: String, required: true}],

}, {softDelete: true});

module.exports = mongodb.resource('user', userSchema, 'users');