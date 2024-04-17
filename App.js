// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import BankDashboard from './BankDashboard';

function App() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/BankDashboard" element={<BankDashboard />} />
          </Routes>
        </div>
      </Router>
    )
}

export default App;
