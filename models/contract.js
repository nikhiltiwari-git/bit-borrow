const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contractSchema = new Schema({
    amount: {
        type: Number, 
        required: true 
    },
    apy: {
        type: Number,
        required: true
    },
    ltv: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    recAddress1: {
        type: Number,
        required: true 
    },
    recAddress2: {
        type: Number,
        required: true 
    },
    pubKey1: {
        type: Number,
        required: true 
    },
    pubKey2: {
        type: Number,
        required: true 
    },
    adId: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

module.exports = mongoose.model('Contract', contractSchema);