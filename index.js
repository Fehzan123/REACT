import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <div id="name">
    <h1>Expense Items</h1>
    <h3>Food Rs 10</h3>
    <h3>Petrol Rs 100</h3>
    <h3>Movies Rs 200</h3>
  </div>
  );
 
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
