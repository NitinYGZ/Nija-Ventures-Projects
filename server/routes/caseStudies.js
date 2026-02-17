const express = require('express');
const router = express.Router();
const CaseStudy = require('../models/CaseStudy');
const authenticateAdmin = require('../middleware/auth');

// GET all case studies
router.get('/', async (req, res) => {
    try {
        const caseStudies = await CaseStudy.find();
        res.json(caseStudies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new case study
router.post('/', authenticateAdmin, async (req, res) => {
    try {
        const newCaseStudy = new CaseStudy(req.body);
        const savedCaseStudy = await newCaseStudy.save();
        res.status(201).json(savedCaseStudy);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
