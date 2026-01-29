const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, required: true },
    message: { type: String },
    type: { type: String, enum: ['Demo', 'Solutions Architect', 'Overview', 'Security Brief', 'Other'], default: 'Demo' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Lead', LeadSchema);
