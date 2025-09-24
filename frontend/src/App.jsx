import React, {useEffect, useState} from 'react';
import axios from 'axios';
import BudgetList from './components/BudgetList';
import AddExpense from './components/AddExpense';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function App(){
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(()=> {
    axios.get(API + '/budgets').then(r=> setBudgets(r.data)).catch(()=>{});
    axios.get(API + '/expenses').then(r=> setExpenses(r.data)).catch(()=>{});
  },[]);

  return (
    <div style={{padding:20, fontFamily:'Arial, sans-serif'}}>
      <h1>Budget Buddy</h1>
      <BudgetList budgets={budgets} />
      <hr />
      <AddExpense budgets={budgets} onAdd={e => setExpenses([e, ...expenses])} />
      <h3>Recent expenses</h3>
      <ul>
        {expenses.map(exp => <li key={exp._id}>{exp.title} — ₹{exp.amount} ({new Date(exp.date).toLocaleDateString()})</li>)}
      </ul>
    </div>
  );
}