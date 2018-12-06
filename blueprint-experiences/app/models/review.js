const mongodb = require ('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;
const { Types: { ObjectId }} = Schema;
const User = require('./user');
const Experience = require('./experience');

const reviewSchema = new Schema ({
  rating: { type: Number, required: true, trim: true, min: 0, max: 5 },
  review: { type: String, required: true, trim: true },
  
  reviewer: { type: ObjectId, required: true, ref: 'Experience' },
  reviewer: { type: ObjectId, required: true, ref: 'User' },
}, { softDelete: true });

module.exports = mongodb.resource ('review', reviewSchema, 'reviews');
