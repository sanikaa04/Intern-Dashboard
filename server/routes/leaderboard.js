const express = require('express');
const router = express.Router();
const { getUsers } = require('../data/users');

// Get leaderboard (users ranked by total donations)
router.get('/', (req, res) => {
  const dummyUsers = getUsers();
  
  // Sort users by total donations in descending order
  const sortedUsers = [...dummyUsers].sort((a, b) => b.totalDonations - a.totalDonations);

  // Add rank to each user
  const leaderboard = sortedUsers.map((user, index) => ({
    rank: index + 1,
    id: user.id,
    name: user.name,
    totalDonations: user.totalDonations,
    referralCode: user.referralCode
  }));

  res.json({
    leaderboard,
    totalUsers: leaderboard.length,
    totalDonations: leaderboard.reduce((sum, user) => sum + user.totalDonations, 0)
  });
});

// Get top 3 users
router.get('/top', (req, res) => {
  const dummyUsers = getUsers();
  const sortedUsers = [...dummyUsers].sort((a, b) => b.totalDonations - a.totalDonations);
  const topUsers = sortedUsers.slice(0, 3).map((user, index) => ({
    rank: index + 1,
    id: user.id,
    name: user.name,
    totalDonations: user.totalDonations,
    referralCode: user.referralCode
  }));

  res.json({ topUsers });
});

module.exports = router; 