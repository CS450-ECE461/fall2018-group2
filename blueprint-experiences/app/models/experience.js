const mongodb = require ('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;
const { Types: {ObjectId} } =Schema;
const User = require('./user');
const Address = require('./address');

const experienceSchema = new Schema ({
  host: { type: ObjectId, required: true, ref: 'User' },

  address: { type: String, required: true, ref: 'Address' },

  description: { type: String, required: true, trim: true },

  details: { type: String, required: true, trim: true },

}, { softDelete: true });

module.exports = mongodb.resource('experience', experienceSchema, 'experiences');