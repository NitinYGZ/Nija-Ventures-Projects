const express = require('express');
const router = express.Router();
const Media = require('../models/Media');
const authenticateAdmin = require('../middleware/auth');

// GET all media
router.get('/', async (req, res) => {
    try {
        const media = await Media.find();
        res.json(media);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new media item
router.post('/', authenticateAdmin, async (req, res) => {
    try {
        const newMedia = new Media(req.body);
        const savedMedia = await newMedia.save();
        res.status(201).json(savedMedia);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
