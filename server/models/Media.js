const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    outlet: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Media', mediaSchema);
