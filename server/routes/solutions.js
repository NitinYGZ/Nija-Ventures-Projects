const express = require('express');
const router = express.Router();
const Solution = require('../models/Solution');
const authenticateAdmin = require('../middleware/auth');

// GET all solutions
router.get('/', async (req, res) => {
    try {
        const solutions = await Solution.find();
        res.json(solutions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET one solution by slug
router.get('/:slug', async (req, res) => {
    try {
        const solution = await Solution.findOne({ slug: req.params.slug });
        if (!solution) return res.status(404).json({ message: 'Solution not found' });
        res.json(solution);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new solution
router.post('/', authenticateAdmin, async (req, res) => {
    try {
        const newSolution = new Solution(req.body);
        const savedSolution = await newSolution.save();
        res.status(201).json(savedSolution);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
