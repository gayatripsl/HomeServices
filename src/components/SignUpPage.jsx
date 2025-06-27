import React from 'react';
import './SignUpPage.css';

function SignUpPage({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Signup successful! Redirecting to login...');
    onLogin();
  };

  return (
    <div className="signup-container">
      <div className="left-section">
        <img src="/log.png" alt="Logo" className="logo" />
        <h1>SERVIFY</h1>
        <p>Join the best service platform</p>
      </div>

      <div className="right-section">
        <div className="signup-box">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter email" />
            </div>
            <div className="input-group">
              <label>Username</label>
              <input type="text" placeholder="Enter username" />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <div className="links">
            <a href="#" onClick={e => {e.preventDefault(); onLogin();}}>Back to Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
