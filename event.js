const mongodb = require ('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;
const { Types: { ObjectId }} = Schema;
const Conversation = require('./conversation');
const Experience = require('./experience');

const eventSchema = new Schema ({
  id: { type: String, required: true, trim: true },
  start: { type: Date, required: true, trim: true, default: new Date () },
  end: { type: Date, required: true, trim: true, default: new Date() }

  conversation: [{type: ObjectId, required: true, ref: 'Conversation' },
  experience: [{type: ObjectId, required: true, ref: 'Experience' },

}], { softDelete: true });

module.exports = mongodb.resource('event', eventSchema, 'events');
