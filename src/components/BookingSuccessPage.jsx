import React from 'react';
import './BookingSuccessPage.css';

function BookingSuccessPage({ onHome }) {
  return (
    <div className="success-container">
      <h2>🎉 Booking Successful!</h2>
      <p>Thank you for choosing SERVIFY. Our professional will contact you shortly.</p>
      <button onClick={onHome}>Back to Home</button>
    </div>
  );
}

export default BookingSuccessPage;
