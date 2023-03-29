import React, { useState } from "react";
import BudgetForm from "./BudgetForm";

function ExpenseBudget() {
  const [budgets, setBudgets] = useState([]);

  const handleAddBudget = (category, amount) => {
    const newBudget = { category, amount };
    setBudgets([...budgets, newBudget]);
  };

  return (
    <div>
      <h1>Budget Manager</h1>
      <BudgetForm addBudget={handleAddBudget} />
      <ul>
        {budgets.map((budget) => (
          <li key={budget.category}>
            {budget.category}: {budget.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseBudget;
