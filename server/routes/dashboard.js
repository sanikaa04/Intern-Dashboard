const express = require('express');
const router = express.Router();
const { getUsers, findUserById } = require('../data/users');

// Dummy rewards data
const rewards = [
  {
    id: 1,
    name: 'Coffee with CEO',
    description: 'Get a chance to have coffee with the CEO',
    requiredDonations: 1000,
    unlocked: false
  },
  {
    id: 2,
    name: 'Company Swag',
    description: 'Get exclusive company merchandise',
    requiredDonations: 500,
    unlocked: false
  },
  {
    id: 3,
    name: 'Lunch with Team',
    description: 'Team lunch at a fancy restaurant',
    requiredDonations: 1500,
    unlocked: false
  },
  {
    id: 4,
    name: 'Conference Pass',
    description: 'Free pass to industry conference',
    requiredDonations: 2000,
    unlocked: false
  }
];

// Get dashboard data for a specific user
router.get('/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = findUserById(userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Check which rewards are unlocked based on total donations
  const unlockedRewards = rewards.map(reward => ({
    ...reward,
    unlocked: user.totalDonations >= reward.requiredDonations
  }));

  res.json({
    user,
    rewards: unlockedRewards,
    stats: {
      totalDonations: user.totalDonations,
      rewardsUnlocked: unlockedRewards.filter(r => r.unlocked).length,
      totalRewards: rewards.length
    }
  });
});

// Get all users (for leaderboard)
router.get('/', (req, res) => {
  const users = getUsers();
  res.json({
    users: users.map(user => ({
      id: user.id,
      name: user.name,
      totalDonations: user.totalDonations,
      referralCode: user.referralCode
    }))
  });
});

module.exports = router; 