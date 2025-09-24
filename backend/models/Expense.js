const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  budget: { type: mongoose.Schema.Types.ObjectId, ref: 'Budget' }
}, { timestamps: true });

module.exports = mongoose.model('Expense', ExpenseSchema);