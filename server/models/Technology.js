const mongoose = require('mongoose');

const technologySchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true,
        description: 'Name of the Lucide icon to use'
    },
    description: {
        type: String,
        required: true
    },
    headline: String,
    subtitle: String,
    outcomes: [{
        title: String,
        description: String
    }],
    useCases: [String],
    features: [String],
    implementation: [{
        step: String,
        description: String
    }],
    relatedSolutions: [String],
    capabilities: [{
        type: String,
        required: true
    }]
}, { timestamps: true });

module.exports = mongoose.model('Technology', technologySchema);
