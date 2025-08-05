# 🚀 Quick Deployment Guide

## Frontend Deployment

### Netlify (Recommended)
1. **Build**: `cd client && npm run build`
2. **Deploy**: Drag `client/build` folder to Netlify
3. **Environment**: Set `REACT_APP_API_URL=https://your-backend-url.com`

### Vercel
1. **Install**: `npm install -g vercel`
2. **Deploy**: `cd client && vercel`
3. **Environment**: Add `REACT_APP_API_URL` in Vercel dashboard

### GitHub Pages
1. **Add homepage** to `client/package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name"
   }
   ```
2. **Deploy**: `cd client && npm run deploy`

## Backend Deployment

### Render (Recommended)
1. **Connect** GitHub repository
2. **Build Command**: `npm install`
3. **Start Command**: `npm start`
4. **Environment**: Node.js

### Railway
1. **Connect** GitHub repository
2. **Auto-deploy** on push
3. **Get URL** from dashboard

### Cyclic
1. **Connect** GitHub repository
2. **Auto-deploy** on push
3. **Get app URL**

## Environment Variables

### Frontend
```env
REACT_APP_API_URL=https://your-backend-url.com
```

### Backend
```env
PORT=5000
NODE_ENV=production
```

## Quick Commands

```bash
# Build frontend
cd client && npm run build

# Test backend locally
cd server && npm start

# Check if backend is running
curl https://your-backend-url.com/api/health
```

## Troubleshooting

- **CORS Issues**: Backend has CORS enabled for all origins
- **404 Errors**: Check if API URL is correct in frontend
- **Build Failures**: Ensure all dependencies are installed
- **Port Issues**: Backend will use `PORT` environment variable or default to 5000

## Support

- Check the main README.md for detailed instructions
- Test API endpoints with curl or Postman
- Verify environment variables are set correctly 