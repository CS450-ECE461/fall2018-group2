const mongodb = require('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;

const addressSchema = new Schema({
    street: { type: String, required: true },
    
    city: { type: String, required: true },
    
    state: { type: String, required: true },
    
    postalCode: { type: String, required: true },
    
    country: { type: String, required: true }

}, { softDelete: true });

module.exports = mongodb.resource('address', addressSchema, 'addresses');