const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const Lead = require('./models/Lead');

dotenv.config({ path: path.join(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nijaworld')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Routes
app.get('/', (req, res) => {
    res.send('Nija World API is running');
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
    // console.log(req.body);
    try {
        const { name, email, company, message, type } = req.body;

        // Basic Validation
        if (!name || !email || !company) {
            return res.status(400).json({ error: 'Please fill in all required fields' });
        }

        const newLead = new Lead({
            name,
            email,
            company,
            message,
            type
        });

        await newLead.save();
        res.status(201).json({ message: 'Request received successfully' });
    } catch (error) {
        console.error('Submission Error:', error);
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ error: messages.join(', ') });
        }
        res.status(500).json({ error: 'Server error processing request' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
