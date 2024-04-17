import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ chartData }) => {
  return (
    <div className="pie-chart-container">
      <Pie
        data={chartData}
        options={{
          title: {
            display: true,
            text: 'Expense Statistics',
            fontSize: 24,
            fontColor: '#333'
          },
          legend: {
            display: true,
            position: 'right',
            fontColor: '#333'
          }
        }}
      />
    </div>
  );
};

export default PieChart;