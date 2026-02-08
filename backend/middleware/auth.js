'use strict';

const jwt = require('jsonwebtoken');

// Middleware for checking JWT and authorizing user roles
module.exports = function(roles = []) {
    return (req, res, next) => {
        // Get token from header
        const token = req.headers['authorization']?.split(' ')[1];

        // Check if token is not provided
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        // Verify the token
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ message: 'Forbidden: Invalid token' });
            }

            req.user = user;

            // Check for role authorization
            if (roles.length && !roles.includes(user.role)) {
                return res.status(403).json({ message: 'Forbidden: You do not have the right role' });
            }

            next();
        });
    };
};