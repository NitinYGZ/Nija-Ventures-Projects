const mongoose = require('mongoose');

const insightSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: false // Optional for now as it maps to external or internal links
    }
}, { timestamps: true });

module.exports = mongoose.model('Insight', insightSchema);
