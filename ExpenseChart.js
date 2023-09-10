import React from "react";
import Chart from "./component/chart/Chart";




const ExpenseChart = (props) => {
  // Calculate the data points for the chart
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  // Update the data points based on the expenses
  if (Array.isArray(props.expens)) {
    for (const expense of props.expens) {
      const expenseMonth = expense.date.getMonth();
      chartDataPoints[expenseMonth].value += expense.amount;
    }
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;