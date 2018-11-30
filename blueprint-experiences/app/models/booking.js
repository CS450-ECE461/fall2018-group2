const mongodb = require ('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;
const { Types: { ObjectId }} = Schema;
const User = require('./user');
const Experience = require('./experience');

const bookingSchema = new Schema ({
  guest: { type: ObjectId, required: true, ref: 'User' },

  experience: {type: ObjectId, required: true, ref: 'Experience' }

}, { softDelete: true });

module.exports = mongodb.resource('booking', bookingSchema, 'bookings');