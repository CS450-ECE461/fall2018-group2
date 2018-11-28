const mongodb = require('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;
const { Types: { ObjectId } } = Schema;
const Experience = require('./experience');

const eventSchema = new Schema({
    experience: { type: ObjectId, required: true, ref: 'Experience' },

    start: { type: Date, required: true },
    
    end: { type: Date, required: true },

}, { softDelete: true });

module.exports = mongodb.resource('event', eventSchema, 'events');