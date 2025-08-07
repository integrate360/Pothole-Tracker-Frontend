import React, { useState } from 'react';
import '../styles/LoginPage.css';
import roadvisionLogo from '../assets/roadvisionlogo.svg';
import carImage from '../assets/car.png';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-page">
      <div className="info-section">
        <div className="info-content">
          <h1>GIS Platform to visualize road infrastructure and for AI based data-driven insights</h1>
        </div>
        <div className="road-graphic"></div>
        <div className="car-container">
            <div className="sensor-pulse"></div>
            <img src={carImage} alt="Animated Car" className="car-image"/>
        </div>
      </div>
      <div className="login-section">
        <div className="login-container">
          <img src={roadvisionLogo} alt="RoadVision AI Logo" className="logo" />
          <h2>Login to RoadVision Web Portal</h2>
          <form>
            <div className="input-group">
              <FiMail className="input-icon" />
              <input type="email" placeholder="Enter your email address" />
            </div>
            <div className="input-group">
              <FiLock className="input-icon" />
              <input 
                type={passwordVisible ? "text" : "password"} 
                placeholder="Enter your password" 
              />
              <span onClick={togglePasswordVisibility} className="password-toggle">
                {passwordVisible ? <FiEye /> : <FiEyeOff />}
              </span>
            </div>
            <a href="#" className="forgot-password">Forgot?</a>
            <button type="submit" className="login-btn">LOGIN</button>
          </form>
          <div className="divider">
            <span>Don't have an account?</span>
          </div>
          <button className="request-account-btn">REQUEST FOR NEW ACCOUNT</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;