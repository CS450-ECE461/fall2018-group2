const mongodb = require ('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;
const { Types: {ObjectId} } =Schema;
const User = require('./user');

const addressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true }
});

const experienceSchema = new Schema ({
  host: { type: ObjectId, required: true, ref: 'User' },

  address: addressSchema,

  image: { type: String, required: false},

  title: { type: String, required: true, trim: true },

  description: { type: String, required: true, trim: true },

  price: { type: Number, required: true, min: 0, default: 12.99 },

  start: { type: Date, required: true, trim: true, default: new Date () },

  end: { type: Date, required: true, trim: true, default: new Date() }

}, { softDelete: true });

module.exports = mongodb.resource('experience', experienceSchema, 'experiences');