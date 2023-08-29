import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [useInput, setUserInput] = useState({
        enterTitle: '',
        enterAmount: '',
        enterDate: ''
    });

    const titleChange = (e) => {
        setUserInput({
            ...useInput,
            enterTitle: e.target.value
        });
    };

    const amountChange = (e) => {
        setUserInput({
            ...useInput,
            enterAmount: e.target.value
        });
    };

    const dateChange = (e) => {
        setUserInput({
            ...useInput,
            enterDate: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const expenseData = {
            title: useInput.enterTitle,
            amount: useInput.enterAmount,
            date: new Date(useInput.enterDate)
        };
        console.log(expenseData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChange} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChange} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChange} />
                </div>
                <div className="new-expense__actions"></div>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;