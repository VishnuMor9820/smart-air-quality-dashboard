const mongoose = require('mongoose');

const sensorDataSchema = new mongoose.Schema({
  temperature: {
    type: Number,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
  },
  aqi: {
    type: Number,
    required: true,
  },
  filterStatus: {
    type: String,
    required: true,
    enum: ['active', 'inactive'], // Example statuses
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('SensorData', sensorDataSchema);