'use strict';

// Error handling middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
};

// 404 Not Found middleware
const notFound = (req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
};

module.exports = {
    errorHandler,
    notFound
};