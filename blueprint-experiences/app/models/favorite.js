const mongodb = require ('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;
const { Types: {ObjectId} } =Schema;
const User = require('./user');
const Experience = require('./experience');

const favoriteSchema = new Schema ({
  user: { type: ObjectId, required: true, ref: 'User' },

  experience: {type: ObjectId, required: true, ref: 'Experience' }

}, { softDelete: true });

module.exports = mongodb.resource('favorite', favoriteSchema, 'favorites');