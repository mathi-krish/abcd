import React from 'react';
import { Bar } from 'react-chartjs-2';

const VerticalBar = ({ chartData }) => {
  return (
    <div className="vertical-bar-container">
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: 'Weekly Expenses',
            fontSize: 24,
            fontColor: '#333'
          },
          legend: {
            display: true,
            position: 'right',
            fontColor: '#333'
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }}
      />
    </div>
  );
};

export default VerticalBar;