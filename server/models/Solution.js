const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
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
    primaryCTA: String,
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
    benefits: [{
        type: String,
        required: true
    }],
    // For HomePage compatibility where it might have 'bullets' instead or appropriately mapped
    bullets: [{
        type: String
    }]
}, { timestamps: true });

module.exports = mongoose.model('Solution', solutionSchema);
