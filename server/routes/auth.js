const express = require('express');
const router = express.Router();
const { addUser, findUserByCredentials, userExists, getUsers } = require('../data/users');

// Login endpoint
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find user by email and password (dummy authentication)
  const user = findUserByCredentials(email, password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Return user data (without password)
  const { password: _, ...userWithoutPassword } = user;
  res.json({
    message: 'Login successful',
    user: userWithoutPassword
  });
});

// Signup endpoint
router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const existingUser = userExists(email);
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  // Create new user (in a real app, this would be saved to database)
  const newUser = {
    id: getUsers().length + 1,
    name,
    email,
    password,
    referralCode: `${name.toLowerCase().replace(/\s+/g, '')}2025`,
    totalDonations: 0
  };

  // Add to shared user data
  addUser(newUser);

  // Return user data (without password)
  const { password: _, ...userWithoutPassword } = newUser;
  res.status(201).json({
    message: 'User created successfully',
    user: userWithoutPassword
  });
});

module.exports = router; 