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

// Get a specific driver
router.get('/drivers/:id', async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id);
    if (!driver) return res.status(404).json({ message: 'Driver not found' });
    res.json(driver);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a driver
router.put('/drivers/:id', async (req, res) => {
  try {
    const updatedDriver = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDriver) return res.status(404).json({ message: 'Driver not found' });
    res.json(updatedDriver);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a driver
router.delete('/drivers/:id', async (req, res) => {
  try {
    const deletedDriver = await Driver.findByIdAndDelete(req.params.id);
    if (!deletedDriver) return res.status(404).json({ message: 'Driver not found' });
    res.json({ message: 'Driver deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
