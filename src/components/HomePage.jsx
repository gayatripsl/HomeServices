import React from 'react';
import './HomePage.css';

function HomePage({ onBookings, onProfile, onLogout }) {
  return (
    <div className="home-container">
      <div className="navbar">
        <h1>SERVIFY</h1>
        <div className="nav-links">
          <a href="#" onClick={(e) => e.preventDefault()}>Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onBookings(); }}>Services</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onBookings(); }}>Bookings</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onProfile(); }}>Profile</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onLogout(); }}>Logout</a>
        </div>
      </div>

      <div className="hero-section">
        <h2>Welcome to SERVIFY</h2>
        <p>Your one-stop solution for all home services.</p>
      </div>

      <div className="services-section">
        <h3>Our Services</h3>
        <div className="services-grid">
          <div className="service-card">
            <img src="cleaning.jpeg" alt="Cleaning" />
            <h4>Cleaning</h4>
            <p>Professional cleaning services for your home or office.</p>
            <button onClick={onBookings}>Book Now</button>
          </div>
          <div className="service-card">
            <img src="plumb.jpg" alt="Plumbing" />
            <h4>Plumbing</h4>
            <p>Expert plumbing solutions for all your needs.</p>
            <button onClick={onBookings}>Book Now</button>
          </div>
          <div className="service-card">
            <img src="electric.webp" alt="Electrical" />
            <h4>Electrical</h4>
            <p>Reliable electrical repair and installation services.</p>
            <button onClick={onBookings}>Book Now</button>
          </div>
          <div className="service-card">
            <img src="painting.jpg" alt="Paintings" />
            <h4>Paintings</h4>
            <p>Decorative and artistic painting services for your space.</p>
            <button onClick={onBookings}>Book Now</button>
          </div>
          <div className="service-card">
            <img src="applience.jpg" alt="Appliance Repair" />
            <h4>Appliance Repair</h4>
            <p>Efficient repair services for all home appliances.</p>
            <button onClick={onBookings}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;