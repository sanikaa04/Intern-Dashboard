import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav style={{
      backgroundColor: 'var(--card-background)',
      borderBottom: '1px solid var(--border-color)',
      padding: '1rem 0',
      marginBottom: '2rem',
      boxShadow: 'var(--shadow)'
    }}>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              color: 'var(--primary-color)',
              marginRight: '2rem'
            }}>
              Intern Dashboard
            </h1>
            <div className="flex" style={{ gap: '1rem' }}>
              <Link
                to="/dashboard"
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  color: isActive('/dashboard') ? 'var(--primary-color)' : 'var(--text-secondary)',
                  fontWeight: isActive('/dashboard') ? '600' : '500',
                  backgroundColor: isActive('/dashboard') ? 'rgb(99 102 241 / 0.1)' : 'transparent'
                }}
              >
                Dashboard
              </Link>
              <Link
                to="/leaderboard"
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  color: isActive('/leaderboard') ? 'var(--primary-color)' : 'var(--text-secondary)',
                  fontWeight: isActive('/leaderboard') ? '600' : '500',
                  backgroundColor: isActive('/leaderboard') ? 'rgb(99 102 241 / 0.1)' : 'transparent'
                }}
              >
                Leaderboard
              </Link>
            </div>
          </div>
          <div className="flex items-center" style={{ gap: '1rem' }}>
            <div className="text-sm text-secondary">
              Welcome, <span className="font-bold">{user?.name}</span>
            </div>
            <button
              onClick={onLogout}
              className="btn btn-outline"
              style={{ fontSize: '0.875rem' }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 