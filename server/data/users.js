// Shared user data management
let dummyUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    referralCode: 'johndoe2025',
    totalDonations: 1250
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
    referralCode: 'janesmith2025',
    totalDonations: 2100
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    password: 'password123',
    referralCode: 'mikejohnson2025',
    totalDonations: 850
  }
];

// Function to add new user
const addUser = (user) => {
  dummyUsers.push(user);
};

// Function to get all users
const getUsers = () => {
  return dummyUsers;
};

// Function to find user by email and password
const findUserByCredentials = (email, password) => {
  return dummyUsers.find(u => u.email === email && u.password === password);
};

// Function to find user by ID
const findUserById = (id) => {
  return dummyUsers.find(u => u.id === id);
};

// Function to check if user exists by email
const userExists = (email) => {
  return dummyUsers.find(u => u.email === email);
};

module.exports = {
  dummyUsers,
  addUser,
  getUsers,
  findUserByCredentials,
  findUserById,
  userExists
}; 