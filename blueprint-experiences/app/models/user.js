const mongodb = require ('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;

const userSchema = new Schema ({
  first_name: { type: String, required: true, trim: true },

  last_name: {type: String, required: true, trim: true },

  roles: [{type: String, required: true, default: 'visitor'}],

}, { softDelete: true });

module.exports = mongodb.resource('user', userSchema, 'users');