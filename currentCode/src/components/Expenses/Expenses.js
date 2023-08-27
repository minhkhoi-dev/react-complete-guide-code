import React, {useState} from 'react';

import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import './Expenses.css';

const Expenses = ({items}) => {

  const [filteredYear, setFilteredYear] = useState('2022');

  const yearFilterHandler = (event) => {
    setFilteredYear(event.target.value)
  }

  const filteredExpenses = items.filter(expense => expense.date.getFullYear() === +filteredYear)

  return (
    <Card className="expenses">
      <ExpensesFilter currentYear={filteredYear} onYearSelected={yearFilterHandler}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
