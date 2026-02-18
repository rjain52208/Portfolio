# 🚀 Live Demo Setup Guide

This guide will help you deploy your projects to create live demos that visitors can actually use!

## 📋 Prerequisites

- GitHub account (you already have this!)
- Vercel account (free) - Sign up at [vercel.com](https://vercel.com)
- Your projects pushed to GitHub

---

## 🎯 Option 1: Deploy with Vercel (Recommended - Easiest)

Vercel is perfect for Next.js, React, and full-stack apps. It's free and automatically deploys from GitHub.

### Step 1: Sign up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (easiest option)
4. Authorize Vercel to access your GitHub

### Step 2: Deploy CollabSpace

1. In Vercel dashboard, click **"Add New"** → **"Project"**
2. Find and select your `collabspace` repository
3. Configure settings:
   - **Framework Preset**: Docker (since it uses Docker Compose)
   - **Root Directory**: Leave as default
   - **Build Command**: Leave as default
   - **Output Directory**: Leave as default
4. Click **"Deploy"**
5. Wait 2-3 minutes for deployment
6. Copy your deployment URL (e.g., `https://collabspace-xyz.vercel.app`)

### Step 3: Deploy JobTracker Pro

1. Repeat Step 2 for `job_pro_tracker` repository
2. Framework Preset: Next.js (it will auto-detect)
3. Copy your deployment URL (e.g., `https://jobtracker-xyz.vercel.app`)

### Step 4: Update Portfolio

Once you have your live demo URLs, update `components/Projects.tsx`:

```typescript
{
  title: 'CollabSpace - Real-time Team Collaboration Platform',
  // ... other fields ...
  demo: 'https://collabspace-xyz.vercel.app', // ← Your Vercel URL here
},
{
  title: 'JobTracker Pro - Application Management System',
  // ... other fields ...
  demo: 'https://jobtracker-xyz.vercel.app', // ← Your Vercel URL here
},
```

---

## 🐳 Option 2: Deploy with Docker + Railway/Render (For Full-Stack Apps)

If your projects need databases (PostgreSQL, Redis), use Railway or Render.

### Railway (Recommended for Docker)

1. Sign up at [railway.app](https://railway.app)
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose your repository
5. Railway will auto-detect Docker Compose
6. Add environment variables (from your `.env.example`)
7. Deploy and get your URL

### Render

1. Sign up at [render.com](https://render.com)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repo
4. Select **"Docker"** as the environment
5. Add environment variables
6. Deploy and get your URL

---

## 📝 Quick Checklist

- [ ] CollabSpace deployed to Vercel/Railway
- [ ] JobTracker Pro deployed to Vercel
- [ ] FinanceFlow deployed (when ready)
- [ ] Updated `demo` URLs in `components/Projects.tsx`
- [ ] Tested all demo links work
- [ ] Verified projects load correctly

---

## 🔧 Troubleshooting

### "Build Failed" Error
- Check your `package.json` dependencies
- Ensure all environment variables are set
- Review build logs in Vercel dashboard

### "Database Connection Error"
- Make sure you've added database URLs in environment variables
- For Railway/Render, they provide database URLs automatically

### "Port Already in Use"
- Vercel handles ports automatically
- For Railway/Render, check your Dockerfile exposes the correct port

---

## 💡 Pro Tips

1. **Custom Domains**: Vercel lets you add custom domains (e.g., `collabspace.yourname.com`)
2. **Environment Variables**: Always add sensitive keys in Vercel dashboard, not in code
3. **Auto-Deploy**: Every GitHub push automatically redeploys your site
4. **Preview Deployments**: Vercel creates preview URLs for every pull request

---

## 🎉 Once Deployed

After you get your live demo URLs:

1. Open `components/Projects.tsx`
2. Replace `demo: '#'` with your actual URLs:
   ```typescript
   demo: 'https://your-actual-demo-url.vercel.app'
   ```
3. Save and refresh your portfolio
4. The **Demo** buttons will now appear and link to your live projects!

---

## 📞 Need Help?

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Railway Docs: [docs.railway.app](https://docs.railway.app)
- Render Docs: [render.com/docs](https://render.com/docs)

Good luck! 🚀
