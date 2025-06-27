import React from 'react';
import './ForgotPasswordPage.css';

function ForgotPasswordPage({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Password reset successful!');
    onLogin();
  };

  return (
    <div className="forgot-container">
      <div className="left-section">
        <img src="/log.png" alt="Logo" className="logo" />
        <h1>SERVIFY</h1>
        <p>Reset your password securely</p>
      </div>

      <div className="right-section">
        <div className="forgot-box">
          <h2>Reset Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Username</label>
              <input type="text" placeholder="Enter username" />
            </div>
            <div className="input-group">
              <label>New Password</label>
              <input type="password" placeholder="Enter new password" />
            </div>
            <button type="submit">Reset Password</button>
          </form>
          <div className="links">
            <a href="#" onClick={e => {e.preventDefault(); onLogin();}}>Back to Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
