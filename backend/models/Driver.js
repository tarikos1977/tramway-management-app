// backend/models/Driver.js
const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  certificationStatus: String,
  licenseNumber: String,
  available: Boolean,
});

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
