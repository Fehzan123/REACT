import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
   const [enterdTitle, setEnterTitle] = useState('');
   const [enterdAmount, setEnterAmount] = useState('');
   const [enterdDate, setEnterDate] = useState('');

    const titleChange = (e) => {
        setEnterTitle(e.target.value);
    };

    const amountChange = (e) => {
        setEnterAmount(e.target.value);
    };

    const dateChange = (e) => {
        setEnterDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enterdTitle,
            amount: enterdAmount,
            date: new Date(enterdDate)
        };
       console.log(expenseData);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" 
                    value={enterdTitle}
                     onChange={titleChange} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number"
                    value={enterdAmount}
                    min="0.01" step="0.01" onChange={amountChange} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"
                    min="2019-01-01" max="2022-12-31" 
                    value={enterdDate}
                    onChange={dateChange} />
                </div>
                <div className="new-expense__actions"></div>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;