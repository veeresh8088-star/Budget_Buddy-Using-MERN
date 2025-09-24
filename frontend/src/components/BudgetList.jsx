import React from 'react';

export default function BudgetList({budgets}){
  if(!budgets || budgets.length === 0) return <p>No budgets yet.</p>;
  return (
    <div>
      <h3>Budgets</h3>
      <ul>
        {budgets.map(b => <li key={b._id}>{b.name}: ₹{b.limit}</li>)}
      </ul>
    </div>
  );
}