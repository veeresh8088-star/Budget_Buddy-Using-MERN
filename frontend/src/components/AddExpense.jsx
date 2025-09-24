import React, {useState} from 'react';
import axios from 'axios';
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function AddExpense({budgets, onAdd}){
  const [title,setTitle]=useState('');
  const [amount,setAmount]=useState('');
  const [budget,setBudget]=useState('');

  const submit = async (e) => {
    e.preventDefault();
    const payload = { title, amount: Number(amount), budget: budget || undefined };
    const res = await axios.post(API + '/expenses', payload);
    onAdd(res.data);
    setTitle(''); setAmount(''); setBudget('');
  };

  return (
    <form onSubmit={submit} style={{marginTop:10}}>
      <h3>Add expense</h3>
      <input placeholder="title" value={title} onChange={e=>setTitle(e.target.value)} required />
      <input placeholder="amount" value={amount} onChange={e=>setAmount(e.target.value)} required type="number" />
      <select value={budget} onChange={e=>setBudget(e.target.value)}>
        <option value="">(no budget)</option>
        {budgets.map(b=> <option key={b._id} value={b._id}>{b.name}</option>)}
      </select>
      <button type="submit">Add</button>
    </form>
  );
}