const mongoose = require('mongoose');

const caseStudySchema = new mongoose.Schema({
    icon: {
        type: String,
        required: true,
        description: 'Name of the Lucide icon to use'
    },
    industry: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    challenge: {
        type: String,
        required: true
    },
    solution: {
        type: String,
        required: true
    },
    results: [{
        type: String,
        required: true
    }]
}, { timestamps: true });

module.exports = mongoose.model('CaseStudy', caseStudySchema);
