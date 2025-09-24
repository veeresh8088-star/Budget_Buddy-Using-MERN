const express = require('express');
const router = express.Router();
const Budget = require('../models/Budget');

// Create budget
router.post('/', async (req, res) => {
  try {
    const b = await Budget.create(req.body);
    res.status(201).json(b);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// List budgets
router.get('/', async (req, res) => {
  try {
    const list = await Budget.find().sort('-createdAt');
    res.json(list);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;