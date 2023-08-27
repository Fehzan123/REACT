

import React, { useState } from 'react';
import ExpensDate from './ExpensDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
 const [ amount , setAmoun ] = useState(props.amount);
 const [ title , setTitle ] = useState(props.title);

 const click=()=>{
    setAmoun('100');
    setTitle('Updated');
 };



  return (
    <div className="expense-item">
      <ExpensDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={click}>change amount and title</button>
    </div>
  );
};

export default ExpenseItem;