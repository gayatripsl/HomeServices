import React, { useState } from 'react';
import './AdminPage.css';

function AdminPage({ onHome }) {
  
  const [users, setUsers] = useState([
    { id: 1, name: 'Gayatri', email: 'Gayatri@gmail.com', type: 'user', status: 'active' },
    { id: 2, name: 'Hasini', email: 'Hasini@gmail.com', type: 'user', status: 'active' },
    { id: 3, name: 'Srija', email: 'Srija@gmail.com', type: 'user', status: 'blocked' },
    { id: 4, name: 'Bhanu', email: 'Bhanu@gmail.com', type: 'service provider', status: 'pending' },
    { id: 5, name: 'Jaanu', email: 'Jaanu@gmail.com', type: 'service provider', status: 'approved' },
  ]);

  const toggleUserStatus = (id) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        return {
          ...user,
          status: user.status === 'active' ? 'blocked' : 'active'
        };
      }
      return user;
    }));
  };

  const approveServiceProvider = (id) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        return {
          ...user,
          status: 'approved'
        };
      }
      return user;
    }));
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
        <button onClick={onHome} className="back-button">Back to Home</button>
      </div>

      <div className="admin-content">
        <div className="admin-section">
          <h3>User Management</h3>
          <table className="users-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.type}</td>
                  <td>{user.status}</td>
                  <td>
                    {user.type === 'user' && (
                      <button 
                        onClick={() => toggleUserStatus(user.id)}
                        className={user.status === 'active' ? 'block-btn' : 'unblock-btn'}
                      >
                        {user.status === 'active' ? 'Block' : 'Unblock'}
                      </button>
                    )}
                    {user.type === 'service provider' && user.status === 'pending' && (
                      <button 
                        onClick={() => approveServiceProvider(user.id)}
                        className="approve-btn"
                      >
                        Approve
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="admin-stats">
          <div className="stat-card">
            <h4>Total Users</h4>
            <p>{users.filter(u => u.type === 'user').length}</p>
          </div>
          <div className="stat-card">
            <h4>Active Users</h4>
            <p>{users.filter(u => u.type === 'user' && u.status === 'active').length}</p>
          </div>
          <div className="stat-card">
            <h4>Service Providers</h4>
            <p>{users.filter(u => u.type === 'service provider').length}</p>
          </div>
          <div className="stat-card">
            <h4>Pending Approvals</h4>
            <p>{users.filter(u => u.type === 'service provider' && u.status === 'pending').length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;