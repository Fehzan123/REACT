
import React, { useState } from 'react';
import './App.css';
import ExpensItem from './ExpensItem';

import ExpenseFilter from './ExpenseFilter';
import NewExpens from './NewExpens';



const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let filteredExpenses = expenses;
  if (filteredYear !== '2020') {
    filteredExpenses = expenses.filter(
      (expense) => expense.date.getFullYear().toString() === filteredYear
    );
  }
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div className="App">
        {/* <ExpenseForm onSaveExpenseData={addExpenseHandler} /> */}
      <NewExpens onSaveExpenseData={addExpenseHandler} />
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((expense) => (
          <ExpensItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      ) : (
        <p>No expenses found for the selected year.</p>
      )}
    </div>
  );
};

export default App;