const mongodb = require ('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;

const userSchema = new Schema ({
  firstName: { type: String, required: true, trim: true },

  lastName: {type: String, required: true, trim: true },

  roles: [{type: String, required: true, default: 'visitor'}],

}, { softDelete: true });

module.                                                                                                                                                                                                                          exports = mongodb.resource('user', userSchema, 'users');