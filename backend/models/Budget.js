const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  limit: { type: Number, required: true, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Budget', BudgetSchema);