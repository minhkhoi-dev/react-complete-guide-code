import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({items}) => {

  const [filteredYear, setFilteredYear] = useState('2022');

  const yearFilterHandler = (event) => {
    setFilteredYear(event.target.value)
  }

  const filteredExpenses = items.filter(expense => expense.date.getFullYear() === +filteredYear)

  return (
    <Card className="expenses">
      <ExpensesFilter currentYear={filteredYear} onYearSelected={yearFilterHandler}/>
      {filteredExpenses.map(expense =>
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}/>
      )}
      {filteredExpenses.length === 0 && <p>No expenses found!</p>}
    </Card>
  );
}

export default Expenses;
