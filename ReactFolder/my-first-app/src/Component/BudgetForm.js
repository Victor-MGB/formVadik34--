import React, { useState } from 'react';
import './BudgetForm.css'

function BudgetForm(props) {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBudget(category, amount);
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className='budget-Form'>
      <label>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>
      <label>
        Budget Amount:
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <button type="submit">Add Budget</button>
    </form>
  );
}

export default BudgetForm;
