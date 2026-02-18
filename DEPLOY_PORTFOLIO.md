# Deploy Your Portfolio & Add Link to Resume

## Part 1: Push portfolio to GitHub

### 1. Create a new repository on GitHub

1. Go to [github.com/new](https://github.com/new).
2. **Repository name:** e.g. `portfolio` or `riddhi-jain-portfolio`.
3. **Public**, leave "Add a README" **unchecked**.
4. Click **Create repository**.

### 2. Push your code from your machine

In a terminal, run (replace `YOUR_USERNAME` and `YOUR_REPO` with your GitHub username and repo name):

```bash
cd "/Users/riddhijain/Portfolio design"

git init
git add .
git commit -m "Initial commit: Riddhi Jain portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Example if your repo is `https://github.com/rjain52208/portfolio`:

```bash
git remote add origin https://github.com/rjain52208/portfolio.git
git push -u origin main
```

---

## Part 2: Get a live portfolio URL (e.g. Vercel)

1. Go to [vercel.com](https://vercel.com) and sign in with **GitHub**.
2. Click **Add New** → **Project**.
3. Import the **portfolio** repo you just pushed.
4. Leave defaults (Framework: Next.js, Build command: `next build`).
5. Click **Deploy**.
6. When it finishes, Vercel gives you a URL like:  
   **`https://portfolio-xxxx.vercel.app`**  
   (You can later set a custom domain or use the default.)

This URL is your **portfolio link** to add to your resume.

---

## Part 3: Add portfolio link to your resume

You need to edit the resume yourself (the file you shared is a PDF; it has to be edited in Word, Google Docs, or similar, then exported to PDF again).

**Suggested placement**

- **Contact / header:** Add a line such as:
  - **Portfolio:** https://your-portfolio-url.vercel.app  
  or  
  - **Portfolio:** [your-portfolio-url.vercel.app](https://your-portfolio-url.vercel.app)

- **Or in a “Links” or “Online presence” line:**
  - LinkedIn | GitHub | **Portfolio:** https://your-portfolio-url.vercel.app

**Exact line you can paste (replace with your real URL):**

```
Portfolio: https://your-portfolio-url.vercel.app
```

After you deploy, replace `https://your-portfolio-url.vercel.app` with the URL Vercel gives you, then add that line to your resume and save/export to PDF again.
