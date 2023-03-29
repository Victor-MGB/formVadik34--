import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';
function ContainExpense(){
    const [expenses,setExpenses] =useState([])
    function addExpense(expenses){
        setExpenses((prevExpenses)=>{
            return[...prevExpenses,expenses]
        })
    }
    return(
        <div style={{background: 'black'}}>
            <h1>Expense management</h1>
            <ExpenseForm onAddExpense ={addExpense}/>
            <ExpenseFilter expenses ={expenses} onSetExpenses={setExpenses}/>
            <ExpenseTable expenses={expenses}/>
            <ExpenseChart expenses={expenses}/>
        </div>
    )
}
export default ContainExpense;