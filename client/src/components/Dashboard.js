import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = ({ user, apiBaseUrl }) => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDashboardData();
  }, [user.id, apiBaseUrl]);

  const fetchDashboardData = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/api/dashboard/${user.id}`);
      setDashboardData(response.data);
    } catch (err) {
      console.error('Dashboard fetch error:', err);
      setError('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading">Loading dashboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome, {dashboardData?.user?.name || user.name}!</h1>
        <p className="dashboard-subtitle">Track your progress and unlock rewards</p>
      </div>

      <div className="dashboard-grid">
        {/* User Stats Card */}
        <div className="dashboard-card stats-card">
          <h3>Your Stats</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">${dashboardData?.user?.totalDonations?.toLocaleString() || 0}</div>
              <div className="stat-label">Total Donations</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{dashboardData?.stats?.rewardsUnlocked || 0}</div>
              <div className="stat-label">Rewards Unlocked</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{dashboardData?.stats?.totalRewards || 0}</div>
              <div className="stat-label">Total Rewards</div>
            </div>
          </div>
        </div>

        {/* Referral Code Card */}
        <div className="dashboard-card">
          <h3>Your Referral Code</h3>
          <div className="referral-code">
            <code>{dashboardData?.user?.referralCode || 'N/A'}</code>
            <button 
              className="btn btn-secondary btn-sm"
              onClick={() => navigator.clipboard.writeText(dashboardData?.user?.referralCode || '')}
            >
              Copy
            </button>
          </div>
          <p className="referral-info">Share this code with friends to earn rewards!</p>
        </div>

        {/* Rewards Card */}
        <div className="dashboard-card rewards-card">
          <h3>Rewards & Unlockables</h3>
          <div className="rewards-list">
            {dashboardData?.rewards?.map((reward) => (
              <div key={reward.id} className={`reward-item ${reward.unlocked ? 'unlocked' : 'locked'}`}>
                <div className="reward-header">
                  <h4>{reward.name}</h4>
                  <span className={`reward-status ${reward.unlocked ? 'unlocked' : 'locked'}`}>
                    {reward.unlocked ? '✓ Unlocked' : '🔒 Locked'}
                  </span>
                </div>
                <p className="reward-description">{reward.description}</p>
                <div className="reward-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: `${Math.min((dashboardData?.user?.totalDonations || 0) / reward.requiredDonations * 100, 100)}%`
                      }}
                    ></div>
                  </div>
                  <span className="progress-text">
                    ${dashboardData?.user?.totalDonations || 0} / ${reward.requiredDonations}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 