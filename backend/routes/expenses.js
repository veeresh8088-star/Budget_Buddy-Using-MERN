const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Create expense
router.post('/', async (req, res) => {
  try {
    const e = await Expense.create(req.body);
    res.status(201).json(e);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// List expenses (optional ?budget=ID)
router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.budget) filter.budget = req.query.budget;
    const list = await Expense.find(filter).sort('-date');
    res.json(list);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;