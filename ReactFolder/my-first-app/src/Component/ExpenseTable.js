import React from "react";
import './ExpenseTable.css'
function ExpenseTable(props){
    const expenses = props.expenses;

    const handleDelete=(expenseid)=>{
        const filteredExpenses = expenses.filter((expense)=>expense.id !==expenseid)
        props.onDeleteExpense(filteredExpenses)
    }
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>...</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense)=>(
                    <tr key={expense.id}>
                        <td>{expense.name}</td>
                        <td>{expense.date.toDateString()}</td>
                        <td>${expense.amount.toFixed(2)}</td>
                        <td>{expense.category}</td>

                        <td>
                            <button onClick={()=>handleDelete(expense.id)}Delete></button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default ExpenseTable;