# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step-by-Step Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `portfolio` or `prashant-joshi-portfolio`)
5. Choose **Public** (required for free GitHub Pages)
6. **Don't** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### Step 2: Initialize Git and Push to GitHub

Open your terminal in the portfolio directory and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/prashantjoshi2077/portfolio.git
```

### Step 3: Enable GitHub Pages

#### Option A: Using GitHub Actions (Recommended - Automatic)

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy when you push to main branch

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
- Build your portfolio automatically
- Deploy to GitHub Pages on every push to main branch
- Handle the base path automatically

#### Option B: Using gh-pages Package (Manual)

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update the base path in `vite.config.ts`:
   - If your repo is `username.github.io`, set base to `'/'`
   - If your repo is `username/repo-name`, set base to `'/repo-name/'`

3. Deploy:
```bash
npm run deploy
```

4. Go to repository Settings > Pages
5. Select **gh-pages** branch as source
6. Your site will be live at: `https://YOUR_USERNAME.github.io/REPO_NAME`

### Step 4: Update Base Path (If Needed)

If your repository name is NOT `username.github.io`, you need to update the base path.

**For GitHub Actions (Automatic):**
The workflow automatically sets the base path. No action needed!

**For Manual Deployment:**
Edit `vite.config.ts` and update the base:

```typescript
export default defineConfig({
  base: '/your-repo-name/', // Change this to your repository name
  // ... rest of config
})
```

### Step 5: Access Your Portfolio

After deployment, your portfolio will be available at:

- **If repo is `username.github.io`**: `https://YOUR_USERNAME.github.io`
- **If repo is `username/repo-name`**: `https://YOUR_USERNAME.github.io/repo-name`

**Example:**
- Repository: `prashantjoshi2077/portfolio`
- URL: `https://prashantjoshi2077.github.io/portfolio`

## Updating Your Portfolio

### Automatic Updates (GitHub Actions)

Just push your changes to the main branch:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

GitHub Actions will automatically rebuild and redeploy your site.

### Manual Updates

If using gh-pages:

```bash
# Make your changes
# Then deploy again
npm run deploy
```

## Troubleshooting

### Issue: 404 Error or Blank Page

**Solution:** Check that the base path in `vite.config.ts` matches your repository name.

### Issue: Assets Not Loading

**Solution:** Ensure the base path is set correctly and includes the trailing slash.

### Issue: GitHub Actions Failing

**Solution:**
1. Check the Actions tab in your repository
2. View the error logs
3. Ensure Node.js version is compatible (we use Node 20)
4. Make sure all dependencies are in `package.json`

### Issue: Markdown Files Not Loading

**Solution:** Ensure markdown files are in the `public/content/` directory and the paths in your code use `/content/` (absolute paths).

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `public/` folder with your domain:
   ```
   yourdomain.com
   ```

2. Configure DNS settings with your domain provider:
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `YOUR_USERNAME.github.io`

3. In GitHub repository Settings > Pages, add your custom domain

## Repository Name Options

### Option 1: Username Repository (Recommended for Personal Portfolio)
- Repository name: `YOUR_USERNAME.github.io`
- URL: `https://YOUR_USERNAME.github.io`
- Base path: `/`

### Option 2: Custom Repository Name
- Repository name: `portfolio` or `my-portfolio`
- URL: `https://YOUR_USERNAME.github.io/portfolio`
- Base path: `/portfolio/`

## Quick Reference

```bash
# Initial setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main

# Future updates
git add .
git commit -m "Update portfolio"
git push origin main
```

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- Check your repository's Actions tab for deployment logs

---

Your portfolio will be live in a few minutes after pushing to GitHub! 🚀

