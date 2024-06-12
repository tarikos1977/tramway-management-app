// backend/routes/driverRoutes.js
const express = require('express');
const router = express.Router();
const Driver = require('../models/Driver');

// Create a new driver
router.post('/drivers', async (req, res) => {
  const newDriver = new Driver(req.body);
  try {
    const savedDriver = await newDriver.save();
    res.status(201).json(savedDriver);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all drivers
router.get('/drivers', async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
