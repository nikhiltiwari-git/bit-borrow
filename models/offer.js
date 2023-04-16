const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const offerSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    minAmount: {
        type: Number, 
        required: true 
    },
    maxAmount: {
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
    timeFrame: {
        type: Number,
        required: true
    },
    offerId: {
        type: Schema.Types.ObjectId,
        required: false
    }
});

module.exports = mongoose.model('Offer', offerSchema);