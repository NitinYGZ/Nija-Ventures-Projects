const express = require('express');
const router = express.Router();

router.post('/verify', (req, res) => {
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    const { password } = req.body;

    if (password === adminPassword) {
        res.status(200).json({ message: 'Authenticated' });
    } else {
        res.status(401).json({ error: 'Invalid password' });
    }
});

module.exports = router;
