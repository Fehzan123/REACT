import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./newExpens.css";

const NewExpens = (props) => {
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.SaveExpenseDataHandler(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
        </div>
    );
};

export default NewExpens;