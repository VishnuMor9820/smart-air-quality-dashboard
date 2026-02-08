const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};

const disconnectDatabase = async () => {
    try {
        await mongoose.connection.close();
        console.log('Database disconnected successfully');
    } catch (error) {
        console.error('Database disconnection failed:', error.message);
    }
};

module.exports = { connectDatabase, disconnectDatabase };