const express = require('express');
const router = express.Router();
const Technology = require('../models/Technology');
const authenticateAdmin = require('../middleware/auth');

// GET all technologies
router.get('/', async (req, res) => {
    try {
        const technologies = await Technology.find();
        res.json(technologies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET one technology by slug
router.get('/:slug', async (req, res) => {
    try {
        const technology = await Technology.findOne({ slug: req.params.slug });
        if (!technology) return res.status(404).json({ message: 'Technology not found' });
        res.json(technology);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new technology
router.post('/', authenticateAdmin, async (req, res) => {
    try {
        const newTechnology = new Technology(req.body);
        const savedTechnology = await newTechnology.save();
        res.status(201).json(savedTechnology);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
