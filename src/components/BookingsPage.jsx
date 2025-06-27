import React, { useState } from 'react';
import './BookingsPage.css';

function BookingsPage({ onHome, onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    houseNumber: '',
    city: '',
    state: '',
    location: '',
    phoneNumber: '',
  });

  const [selectedService, setSelectedService] = useState('');
  const [showServicePopup, setShowServicePopup] = useState(false);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  const servicePrices = {
    'Painting': 20000,
    'Appliance Repair': 5000,
    'Cleaning': 10000,
    'Electric Work': 8000,
    'Plumbing': 4000,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const openServicePopup = () => {
    const isEmpty = Object.values(formData).some(val => val.trim() === '');
    if (isEmpty) {
      alert("Please fill all the fields before proceeding.");
      return;
    }
    setShowServicePopup(true);
  };

  const closeServicePopup = () => setShowServicePopup(false);
  const closePaymentPopup = () => setShowPaymentPopup(false);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setShowServicePopup(false);
    setShowPaymentPopup(true);
  };

  const handlePayment = (method) => {
    alert(`Payment of ₹${servicePrices[selectedService]} successful via ${method}. Thank you for booking.`);
    setShowPaymentPopup(false);
    onSuccess(); // Navigates to BookingSuccessPage
  };

  return (
    <div className="bookings-container">
      <h2>Book a Service</h2>
      <form className="booking-form">
        {["name", "houseNumber", "city", "state", "location", "phoneNumber"].map(field => (
          <div className="input-group" key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter your ${field}`}
            />
          </div>
        ))}
        <button type="button" onClick={openServicePopup}>Select Service</button>
      </form>
      <button className="back-to-home" onClick={onHome}>Back to Home</button>

      {showServicePopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Select a Service</h3>
            {Object.keys(servicePrices).map(service => (
              <button key={service} onClick={() => handleServiceSelect(service)}>{service}</button>
            ))}
            <button onClick={closeServicePopup}>Cancel</button>
          </div>
        </div>
      )}

      {showPaymentPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Selected Service: {selectedService}</h3>
            <p>Amount: ₹{servicePrices[selectedService]}</p>
            <h4>Select Payment Method:</h4>
            {["UPI", "Credit/Debit Card", "Payment After Service"].map(method => (
              <button key={method} onClick={() => handlePayment(method)}>{method}</button>
            ))}
            <button onClick={closePaymentPopup}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingsPage;
