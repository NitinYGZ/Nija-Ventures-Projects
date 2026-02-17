const authenticateAdmin = (req, res, next) => {
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'; // Default fallback for dev
    const providedPassword = req.headers['x-admin-password'];

    if (!providedPassword || providedPassword !== adminPassword) {
        return res.status(401).json({ error: 'Unauthorized: Invalid admin password' });
    }

    next();
};

module.exports = authenticateAdmin;
