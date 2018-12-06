const mongodb = require ('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;
const { Types: { ObjectId }} = Schema;
const User = require('./user');
const Experience = require('./conversation');

const messageSchema = new Schema ({
  timestamp: { type: Date, required: true, trim: true, default: Date.now },
  message: { type: String, required: true, trim: true },
  conversation: {type: ObjectId, required: true, ref: 'Conversation' },
  user: {type: ObjectId, required: true, ref: 'User' }

}, { softDelete: true });

module.exports = mongodb.resource('message', messageSchema, 'messages');
