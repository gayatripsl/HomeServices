import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage({ onSignUp, onForgot, onLogin, onAdminLogin, setUserData }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }
    
    setUserData({ username, password });
    
    if (userType === 'user') {
      onLogin();
    } else {
      onAdminLogin();
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <img src="/log.png" alt="Logo" className="logo" />
        <h1>SERVIFY</h1>
        <p>Where Service Meets Luxury</p>
        <div className="about-section">
          <h3>About Us</h3>
          <p>
            SERVIFY is a premier service platform connecting customers with 
            trusted service providers for all your home service needs.
          </p>
        </div>
      </div>

      <div className="right-section">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="userType">Login As</label>
              <select
                id="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="role-selector"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
          <div className="links">
            <a href="#" onClick={e => { e.preventDefault(); onForgot(); }}>Forgot Password?</a>
            <span> | </span>
            <a href="#" onClick={e => { e.preventDefault(); onSignUp(); }}>Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;