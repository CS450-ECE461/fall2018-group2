const mongodb = require ('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;
const { Types: { ObjectId }} = Schema;
const Event = require('./event');
const Message = require('./message');
const User = require('./user');

const conversationSchema = new Schema ({
  title: { type: String, required: true, trim: true },
  event: { type: ObjectId, required: true, ref: 'Event' },
  messages: [{type: ObjectId, required: true, ref: 'Message' }],
  users: [{type: ObjectId, required: true, ref: 'User' }

}], { softDelete: true });

module.exports = mongodb.resource('conversation', conversationSchema, 'conversations');
