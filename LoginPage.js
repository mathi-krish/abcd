import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginPage.css";
import apple from './img/apple.jpeg';
import google from './img/google.jpeg';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/BankDashboard');
  };

  const handleRegisterClick = () => {
    navigate('/signup');
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
              <h2 className="name">Sign in to</h2>
              <h2 className="subname">Lorem Ipsum is simply</h2>
            </div>
            <div className="pt-2" style={{ fontSize: "22px" }}>
              If you don’t have an account register
              <br />
              <span>You can </span>
              <span style={{ fontWeight: "bold", color: "#4D47C3" }}>
                <button onClick={handleRegisterClick} style={{ textDecoration:'none', background: 'none', border: 'none', color: '#4D47C3', cursor: 'pointer' }}>Register here!</button>
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
              Sign in
            </h2>
            <input
              type="text"
              placeholder="Enter email or user name"
              className="i-box"
            />
            <div>
              <input type="text" placeholder="Password" className="i-box" />
            </div>
            <div>
            {/* eslint-disable-next-line */}
              <a href="" className="a">
                Forgot Password?
              </a>
            </div>
            <button onClick={handleLoginClick} className="button">Login</button>
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

export default LoginPage;
