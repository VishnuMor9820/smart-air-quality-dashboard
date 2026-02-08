const mongoose = require('mongoose');

const alertLogSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true,
    },
    alertType: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('AlertLog', alertLogSchema);