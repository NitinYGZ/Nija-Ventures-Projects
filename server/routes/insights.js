const express = require('express');
const router = express.Router();
const Insight = require('../models/Insight');
const authenticateAdmin = require('../middleware/auth');

// GET all insights
router.get('/', async (req, res) => {
    try {
        const insights = await Insight.find();
        res.json(insights);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new insight
router.post('/', authenticateAdmin, async (req, res) => {
    try {
        const newInsight = new Insight(req.body);
        const savedInsight = await newInsight.save();
        res.status(201).json(savedInsight);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
