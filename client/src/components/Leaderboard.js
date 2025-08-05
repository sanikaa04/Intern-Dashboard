import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leaderboard = ({ apiBaseUrl }) => {
  const [leaderboardData, setLeaderboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchLeaderboardData();
  }, [apiBaseUrl]);

  const fetchLeaderboardData = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/api/leaderboard`);
      setLeaderboardData(response.data);
    } catch (err) {
      console.error('Leaderboard fetch error:', err);
      setError('Failed to load leaderboard data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="leaderboard-container">
        <div className="loading">Loading leaderboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="leaderboard-container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <h1>🏆 Leaderboard</h1>
        <p className="leaderboard-subtitle">Top performers based on total donations</p>
      </div>

      <div className="leaderboard-stats">
        <div className="stat-card">
          <h3>Total Participants</h3>
          <div className="stat-value">{leaderboardData?.totalUsers || 0}</div>
        </div>
        <div className="stat-card">
          <h3>Total Donations</h3>
          <div className="stat-value">${leaderboardData?.totalDonations?.toLocaleString() || 0}</div>
        </div>
      </div>

      <div className="leaderboard-list">
        {leaderboardData?.leaderboard?.map((user, index) => (
          <div 
            key={user.id} 
            className={`leaderboard-item ${index < 3 ? 'top-performer' : ''}`}
          >
            <div className="rank-section">
              <div className={`rank ${index < 3 ? 'top-rank' : ''}`}>
                {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${user.rank}`}
              </div>
            </div>
            
            <div className="user-info">
              <h3 className="user-name">{user.name}</h3>
              <p className="user-code">Code: {user.referralCode}</p>
            </div>
            
            <div className="donation-amount">
              <span className="amount">${user.totalDonations.toLocaleString()}</span>
              <span className="label">Total Donations</span>
            </div>
          </div>
        ))}
      </div>

      {leaderboardData?.leaderboard?.length === 0 && (
        <div className="empty-state">
          <p>No leaderboard data available yet.</p>
        </div>
      )}
    </div>
  );
};

export default Leaderboard; 