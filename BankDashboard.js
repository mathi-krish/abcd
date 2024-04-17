import React from 'react';
import PieChart from './PieChartDemo';
import VerticalBar from './VerticalBarDemo';
import 'chart.js/auto';
import './Bank-Styles.css';

const BankDashboard = () => {
  // // Sample data for the pie chart
  const pieChartData = {
    labels: ['Food', 'Entertainment', 'Travel', 'Other'],
    datasets: [
      {
        data: [300, 200, 150, 100],
        backgroundColor: ['#f7931a', '#4e54c8', '#e46651', '#00d8ff']
      }
    ]
  };

  // Sample data for the bar chart
  const barChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Expenses',
        data: [120, 150, 100, 180, 200, 100, 150],
        backgroundColor: '#4e54c8'
      }
    ]
  };

  // Sample data for the contact list
  const contactList = [
    {
      name: 'John Doe',
      image: 'https://via.placeholder.com/50x50'
    },
    {
      name: 'Jane Smith',
      image: 'https://via.placeholder.com/50x50'
    },
    {
      name: 'Bob Johnson',
      image: 'https://via.placeholder.com/50x50'
    }
  ];

  // Sample data for the ATM card
  const atmCardData = {
    number: '**** **** **** 1234',
    expiry: '02/25'
  };

  return (
    <div className="bank-dashboard-container">
      <div className="sidebar">
        <div className="sidebar-item">Dashboard</div>
        <div className="sidebar-item">Transaction</div>
        <div className="sidebar-item">Accounts</div>
        <div className="sidebar-item">Investments</div>
        <div className="sidebar-item">Credit Cards</div>
        <div className="sidebar-item">Loans</div>
        <div className="sidebar-item">My Privileges</div>
        <div className="sidebar-item">Settings</div>
      </div>
      <div className="content">
        <h1 className="dashboard-title">Bank Dashboard</h1>
        <div className="atm-card-container">
          <div className="atm-card">
            <h3 className="atm-card-title">ATM Card Details</h3>
            <div className="atm-card-info">
              <p className="atm-card-number">Card Number: {atmCardData.number}</p>
              <p className="atm-card-expiry">Expiry Date: {atmCardData.expiry}</p>
            </div>
            <div className="atm-card-footer">
            {/* eslint-disable-next-line */}
              <a href="#">View Transactions</a>
            </div>
          </div>
        </div>
        <div className="charts-container">
        <div className="chart">
    <PieChart chartData={pieChartData} width={400} height={400} />
  </div>
  <div className="chart">
    <VerticalBar chartData={barChartData} width={400} height={400} />
  </div>
        </div>
        <div className="contact-container">
          <h3>Contacts for Quick Transfer</h3>
          <ul className="contact-list">
            {contactList.map((contact, index) => (
              <li key={index} className="contact-list-item">
                <img src={contact.image} alt={contact.name} className="contact-avatar" />
                <span className="contact-name">{contact.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    // </div>
  );
};

export default BankDashboard;
