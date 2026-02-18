# 📝 How to Update Portfolio URLs (After Deployment)

Once you have your deployment URLs, here's exactly what to do:

---

## 🎯 Quick Update Instructions

### Option 1: Tell Me the URLs (Easiest!)

Just send me:
```
CollabSpace Demo: https://collabspace-xyz.vercel.app
JobTracker Demo: https://jobtracker-xyz.vercel.app
```

I'll update your portfolio automatically! ✨

---

### Option 2: Update Yourself

1. Open: `components/Projects.tsx`
2. Find the `projects` array (around line 7)
3. Update the `demo` fields:

```typescript
const projects = [
  {
    title: 'CollabSpace - Real-time Team Collaboration Platform',
    // ... other fields ...
    demo: 'https://collabspace-xyz.vercel.app', // ← Replace '#' with your URL
  },
  {
    title: 'JobTracker Pro - Application Management System',
    // ... other fields ...
    demo: 'https://jobtracker-xyz.vercel.app', // ← Replace '#' with your URL
  },
  // ... FinanceFlow stays as '#' for now
]
```

4. Save the file
5. Refresh your portfolio - Demo buttons will appear! 🎉

---

## 🔄 For FinanceFlow (Later)

When you deploy FinanceFlow:

1. Update `github: '#'` → Your GitHub repo URL
2. Update `demo: '#'` → Your deployment URL

---

**That's it! Super simple.** 🚀
