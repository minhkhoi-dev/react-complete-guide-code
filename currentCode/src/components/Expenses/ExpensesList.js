import React from "react";
import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css';

const ExpensesList = ({items}) => {

  const expensesListContent = items.map(expense =>
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}/>
  )

  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expense!</h2>
  }

  return <ul className="expenses-list">{expensesListContent}</ul>
}

export default ExpensesList;
