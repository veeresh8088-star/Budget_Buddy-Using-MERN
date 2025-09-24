const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/budgetbuddy';

// Models
const Budget = require('./models/Budget');
const Expense = require('./models/Expense');

// Routes
const budgetsRouter = require('./routes/budgets');
const expensesRouter = require('./routes/expenses');

app.use('/api/budgets', budgetsRouter);
app.use('/api/expenses', expensesRouter);

mongoose.connect(MONGO_URI)
  .then(()=> {
    console.log('Connected to MongoDB');
    app.listen(PORT, ()=> console.log(`Server listening on ${PORT}`));
  })
  .catch(err => console.error(err));