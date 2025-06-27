import React from 'react';
import './ProfilePage.css';

function ProfilePage({ userData, onHome }) {
  
  const profileData = {
    username: userData?.username || 'Guest',
    email: userData?.email || 'No email provided',
    phone: userData?.phone || 'No phone number provided',
    location: userData?.location || 'No location specified',
    joinedDate: userData?.joinedDate || new Date().toLocaleDateString(),
    bookings: userData?.bookings || 0,
    favorites: userData?.favorites || ['No favorites yet']
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>My Profile</h2>
        <button onClick={onHome} className="back-button">Back to Home</button>
      </div>

      <div className="profile-content">
        <div className="profile-info">
          <div className="profile-avatar">
            <img src="/profile-avatar.png" alt="Profile" />
          </div>
          <div className="profile-details">
            <h3>{profileData.username}</h3>
            <p><strong>Email:</strong> {profileData.email}</p>
            <p><strong>Phone:</strong> {profileData.phone}</p>
            <p><strong>Location:</strong> {profileData.location}</p>
            <p><strong>Member since:</strong> {profileData.joinedDate}</p>
          </div>
        </div>

        <div className="profile-stats">
          <div className="stat-card">
            <h4>Total Bookings</h4>
            <p>{profileData.bookings}</p>
          </div>
          <div className="stat-card">
            <h4>Favorite Services</h4>
            <ul>
              {profileData.favorites.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="profile-actions">
          <button className="edit-profile">Edit Profile</button>
          <button className="change-password">Change Password</button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;