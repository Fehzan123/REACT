import React from 'react';
import './App.css';
import ExpensItem from './ExpensItem';
import ExpenseForm from './ExpenseForm';

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
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
    const [expenses, setExpenses] = useState([]);

  const DUMMY_EXPENSE = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expenseData];
    });
  };
  return (
    <div className="App">
      <ExpenseForm damy={DUMMY_EXPENSE} />
      {DUMMY_EXPENSE.map((expenses) => (
        <ExpensItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './App.css';
import ExpensItem from './ExpensItem';
import ExpenseForm from './ExpenseForm';
import ExpenseFilter from './ExpenseFilter';

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
  ]);

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

  const addExpense = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expenseData];
    });
  };

  return (
    <div className="App">
      <ExpenseForm onSaveExpenseData={addExpense} />
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

// export default App;