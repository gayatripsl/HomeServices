import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import HomePage from './components/Homepage';
import BookingsPage from './components/BookingsPage';
import BookingSuccessPage from './components/BookingSuccessPage';
import ProfilePage from './components/ProfilePage';
import AdminPage from './components/AdminPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [userData, setUserData] = useState(null);

  const goTo = (page) => setCurrentPage(page);
  const handleLogout = () => {
    setUserData(null);
    goTo('login');
  };

  return (
    <div className="app">
      {currentPage === 'login' && <LoginPage onSignUp={() => goTo('signup')} onForgot={() => goTo('forgot')} onLogin={() => goTo('home')} onAdminLogin={() => goTo('admin')} setUserData={setUserData} />}
      {currentPage === 'signup' && <SignUpPage onLogin={() => goTo('login')} />}
      {currentPage === 'forgot' && <ForgotPasswordPage onLogin={() => goTo('login')} />}
      {currentPage === 'home' && <HomePage onBookings={() => goTo('bookings')} onProfile={() => goTo('profile')} onLogout={handleLogout} />}
      {currentPage === 'bookings' && <BookingsPage onHome={() => goTo('home')} onSuccess={() => goTo('success')} />}
      {currentPage === 'success' && <BookingSuccessPage onHome={() => goTo('home')} />}
      {currentPage === 'profile' && <ProfilePage userData={userData} onHome={() => goTo('home')} />}
      {currentPage === 'admin' && <AdminPage onHome={() => goTo('home')} />}
    </div>
  );
}

export default App;
