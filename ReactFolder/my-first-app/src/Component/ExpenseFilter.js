import React, { useState } from "react";
function ExpenseFilter(props){
    const [categoryFilter,setCategoryFilter] = useState('All');
    const [startDateFilter,setStartDateFilter] = useState('');
    const [endDateFilter,setEndDateFilter] = useState('')

    const handleCategoryChange = (e)=>{
        setCategoryFilter(e.target.value);
        filterExpenses(categoryFilter,startDateFilter,endDateFilter)
    }
    const handleStartDateChange=(e)=>{
        setStartDateFilter(e.target.value);
        filterExpenses(categoryFilter,startDateFilter,endDateFilter)
    }
    const handleEndDateChange=(e)=>{
        setEndDateFilter(e.target.value);
        filterExpenses(categoryFilter,startDateFilter,endDateFilter);
    }
    const filterExpenses =(category,startDate,endDate)=>{
        let filteredExpenses = props.exppenses;
        if(category !== "All"){
            filteredExpenses= filteredExpenses.filter((exppense)=>exppense.category === category);
        }

        if(startDate && endDate){
            filteredExpenses = filterExpenses.filter((exppense)=>{
                const expenseDate = new Date(exppense.date);
                return expenseDate >= new Date(startDate) && expenseDate <= new Date(endDate)
            })
        }
        props.onSetExpenses(filteredExpenses)
    }
    return(
        <div>
            <label>
                Category:
                <select value={categoryFilter} onChange={handleCategoryChange}>
                    <option value="All">All</option>
                    <option value="Food">Food</option>
                    <option value="Housing">Housing</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Other">Other</option>
                </select>
            </label>

            <label>
                start Date:
                <input type="date" 
                value={startDateFilter}
                onChange={handleStartDateChange}/>
            </label>

            <label>End Date:
                <input type="date" 
                value={endDateFilter} 
                onChange={handleEndDateChange}/>
            </label>
        </div>
    )
}
export default ExpenseFilter;