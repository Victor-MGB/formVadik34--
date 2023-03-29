import React, { useState } from 'react'
import './ExpenseForm.css'
function ExpenseForm(props){
    const[name,setName] =useState('');
    const [date,setDate] =useState('');
    const[amount,setAmount] = useState('');
    const[category,setCategory] =useState('');

    function handleSubmit(e){
        e.preventDefault();
        const expense = {
            name: name,
            date: date,
            amount: amount,
            category: category
        }
        props.onAddExpense(expense);
        setName('');
        setDate('');
        setAmount('');
        setCategory('');
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Expense Name</label>
                <input type="text" 
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
                <br/>
                <label>Date</label>
                <input type='text'
                value={date}
                onChange={(e)=>setDate(e.target.value)}/>
                <label>Amount</label>
                <input type='text'
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}/>
                <br/>
                <label>Category</label>
                <input type="text" 
                value={category}
                onChange={(e)=>setCategory(e.target.value)}/>
                <br/>
                <button type='submit'>Add Expense</button>
            </form>
        </div>
    )
}
export default ExpenseForm;