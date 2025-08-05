# Intern Dashboard 🚀

A full-stack web application for tracking intern donations, rewards, and leaderboards. Built with React frontend and Node.js/Express backend.

## ✨ Features

- **User Authentication** - Login/Signup system with demo credentials
- **Dashboard** - Personal stats, referral codes, and donation tracking
- **Rewards System** - Unlockable rewards based on donation thresholds
- **Leaderboard** - Real-time rankings of top performers
- **Responsive Design** - Works perfectly on all devices
- **Modern UI** - Clean, professional interface with smooth animations

## 🛠 Tech Stack

- **Frontend**: React 18, React Router, Axios
- **Backend**: Node.js, Express.js
- **Styling**: Custom CSS with CSS Variables
- **Deployment**: Ready for Netlify/Vercel (Frontend) & Render/Railway (Backend)

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd intern-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Start development servers**
   ```bash
   # Terminal 1 - Backend
   cd server && npm run dev
   
   # Terminal 2 - Frontend
   cd client && npm start
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

## 🎯 Demo Credentials

Use these credentials to test the application:

| Email | Password |
|-------|----------|
| john@example.com | password123 |
| jane@example.com | password123 |
| mike@example.com | password123 |

## 📱 Available Pages

1. **Login/Signup** - Authentication with demo credentials
2. **Dashboard** - Personal stats, referral code, and rewards
3. **Leaderboard** - Rankings based on total donations

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration

### Dashboard
- `GET /api/dashboard/:userId` - Get user dashboard data
- `GET /api/dashboard` - Get all users

### Leaderboard
- `GET /api/leaderboard` - Get full leaderboard
- `GET /api/leaderboard/top` - Get top 3 users

### Health Check
- `GET /api/health` - Server status

## 🎨 Design System

### Colors
- Primary: `#6366f1` (Indigo)
- Success: `#10b981` (Green)
- Warning: `#f59e0b` (Amber)
- Danger: `#ef4444` (Red)
- Background: `#f8fafc` (Gray-50)

### Components
- Cards with subtle shadows
- Responsive grid layouts
- Progress bars for rewards
- Modern form inputs
- Clean typography

## 🏆 Rewards System

Users can unlock rewards based on their total donations:

| Reward | Required Donations | Description |
|--------|-------------------|-------------|
| Company Swag | $500 | Exclusive merchandise |
| Coffee with CEO | $1,000 | One-on-one meeting |
| Lunch with Team | $1,500 | Team restaurant outing |
| Conference Pass | $2,000 | Industry conference access |

## 🚀 Deployment

### Frontend Deployment (Netlify/Vercel)

#### Option 1: Netlify
1. **Build the project**
   ```bash
   cd client
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `build` folder to Netlify
   - Or connect your GitHub repository
   - Set environment variable: `REACT_APP_API_URL=https://your-backend-url.com`

#### Option 2: Vercel
1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   cd client
   vercel
   ```

2. **Set environment variable**
   - Add `REACT_APP_API_URL=https://your-backend-url.com` in Vercel dashboard

#### Option 3: GitHub Pages
1. **Add homepage to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name"
   }
   ```

2. **Deploy**
   ```bash
   cd client
   npm run build
   npm run deploy
   ```

### Backend Deployment

#### Option 1: Render
1. **Connect your GitHub repository**
2. **Configure build settings**
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: Node

3. **Set environment variables**
   - `PORT`: 10000 (or leave empty for auto-assignment)

#### Option 2: Railway
1. **Connect your GitHub repository**
2. **Auto-deploy on push**
3. **Set environment variables in dashboard**

#### Option 3: Cyclic
1. **Connect your GitHub repository**
2. **Auto-deploy on push**
3. **Get your app URL**

#### Option 4: Firebase Functions
1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**
   ```bash
   firebase init functions
   ```

3. **Deploy**
   ```bash
   firebase deploy --only functions
   ```

### Environment Variables

#### Frontend (.env)
```env
REACT_APP_API_URL=https://your-backend-url.com
```

#### Backend (.env)
```env
PORT=5000
NODE_ENV=production
```

## 📁 Project Structure

```
intern-dashboard/
├── client/                 # React frontend
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── _redirects     # Netlify redirects
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── vercel.json       # Vercel configuration
├── server/                # Node.js backend
│   ├── data/
│   │   └── users.js      # Shared user management
│   ├── routes/           # API routes
│   ├── index.js
│   └── package.json
├── package.json
└── README.md
```

## 🧪 Testing

### Manual Testing
1. **Authentication Flow**
   - Test login with demo credentials
   - Test signup with new account
   - Verify dashboard loads correctly

2. **Dashboard Features**
   - Check user stats display
   - Verify referral code functionality
   - Test rewards progress bars

3. **Leaderboard**
   - Verify rankings display correctly
   - Check total stats calculation

### API Testing
```bash
# Health check
curl https://your-backend-url.com/api/health

# Login
curl -X POST https://your-backend-url.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'

# Dashboard data
curl https://your-backend-url.com/api/dashboard/1

# Leaderboard
curl https://your-backend-url.com/api/leaderboard
```

## 🔧 Customization

### Adding New Rewards
Edit `server/routes/dashboard.js`:
```javascript
const rewards = [
  // ... existing rewards
  {
    id: 5,
    name: 'New Reward',
    description: 'Description here',
    requiredDonations: 2500,
    unlocked: false
  }
];
```

### Modifying User Data
Edit `server/data/users.js`:
```javascript
let dummyUsers = [
  // ... existing users
  {
    id: 4,
    name: 'New User',
    email: 'new@example.com',
    password: 'password123',
    referralCode: 'newuser2025',
    totalDonations: 1500
  }
];
```

## 🚀 Future Enhancements

- [ ] Real database integration (MongoDB/PostgreSQL)
- [ ] User profile management
- [ ] Real-time notifications
- [ ] Email verification
- [ ] Password reset functionality
- [ ] Admin dashboard
- [ ] Donation tracking system
- [ ] Payment integration
- [ ] Mobile app (React Native)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with deployment, feel free to:
- Open an issue on GitHub
- Check the deployment documentation above
- Review the API endpoints section

---

**Happy Coding! 🎉** 