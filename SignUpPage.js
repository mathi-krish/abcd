import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Sign-Styles.css"; // assuming you have a separate CSS file for the SignUpPage
import apple from './img/apple.jpeg';
import google from './img/google.jpeg';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    // Logic for handling registration
    navigate('/BankDashboard'); // Redirect to BankDashboard after successful registration
  };

  return (
    <div className="overall">
      <div className="main-div-a">
        <h2 style={{ marginLeft: "1rem", fontSize: "2rem" }}>Your Logo</h2>
      </div>
      <div className="main-div-b">
        <div className="sub-div-a">
          <div className="sub-content">
            <div>
              <h2 className="name">Sign up for</h2>
              <h2 className="subname">Lorem Ipsum is simply</h2>
            </div>
            <div className="pt-2" style={{ fontSize: "22px" }}>
              If you already have an account, please 
              <span style={{ fontWeight: "bold", color: "#4D47C3" }}>
                <button onClick={() => navigate('/login')} style={{ textDecoration:'none', background: 'none', border: 'none', color: '#4D47C3', cursor: 'pointer' }}>Log in here!</button>
              </span>
            </div>
          </div>
          <img
            src="https://raw.githubusercontent.com/jaslam94/figma-exercises/main/login-1/assets/images/saly-14.png"
            alt="log"
            className="img-b"
          />
        </div>
        <div className="sub-div-b">
          <form action="" className="form-box">
            <h2
              style={{
                textAlign: "left",
                fontSize: "2.3rem",
                marginRight: "19rem",
                fontWeight: "600",
              }}
            >
              Sign up
            </h2>
            <input
              type="text"
              placeholder="Enter username"
              className="i-box"
            />
            <input
              type="email"
              placeholder="Enter email"
              className="i-box"
            />
            <input
              type="password"
              placeholder="Enter password"
              className="i-box"
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="i-box"
            />
            <input
              type="text"
              placeholder="Enter contact number"
              className="i-box"
            />
            <button onClick={handleRegisterClick} className="button">Register</button>
            <p style={{ color: "gray", fontSize: "1.1rem" }}>
              or continue with
            </p>
            <div className="g-box">
              <img src={apple} alt="" className="icon" />
              <img src={google} alt="" className="icon" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
