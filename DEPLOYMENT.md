# GitHub Pages Deployment Guide

Step-by-step guide to deploy your portfolio to GitHub Pages.

## 📋 Prerequisites

- Git installed on your computer
- GitHub account created
- Your portfolio customized (see CUSTOMIZATION.md)

## 🚀 Deployment Steps

### Step 1: Prepare Your Repository Name

Choose a name for your repository (e.g., `portfolio`, `my-website`, `portfolio-site`)

### Step 2: Update package.json

Open `package.json` and find the `homepage` field (line 4):

```json
"homepage": "https://yourusername.github.io/your-repo-name",
```

**Replace**:
- `yourusername` → Your actual GitHub username
- `your-repo-name` → The repository name you chose

**Example**:
If your GitHub username is `johndoe` and your repo is `portfolio`:
```json
"homepage": "https://johndoe.github.io/portfolio",
```

### Step 3: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the **+** icon (top right) → **New repository**
3. Enter your repository name (same as in Step 2)
4. **Do NOT** check "Initialize with README"
5. Click **Create repository**

### Step 4: Initialize Git & Push Code

Open terminal in your project folder:

```bash
# Navigate to project (if not already there)
cd /Users/edwardzhang/Desktop/Website

# Initialize git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/your-repo-name.git

# Create main branch and push
git branch -M main
git push -u origin main
```

**Replace** `yourusername/your-repo-name` with your actual values!

### Step 5: Deploy to GitHub Pages

Still in terminal:

```bash
# Deploy your site
npm run deploy
```

This will:
- Build your React app
- Create a `gh-pages` branch
- Push the build to GitHub Pages

Wait for it to complete (usually 30-60 seconds).

### Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source":
   - Branch: Select **gh-pages**
   - Folder: Select **/ (root)**
5. Click **Save**

### Step 7: Wait & Visit

- GitHub will build your site (1-2 minutes)
- Visit: `https://yourusername.github.io/your-repo-name`
- 🎉 Your site is live!

## 🔄 Updating Your Site

After making changes to your portfolio:

```bash
# Save all your files first!

# Add changes
git add .

# Commit changes
git commit -m "Update portfolio content"

# Push to GitHub
git push

# Deploy updated site
npm run deploy
```

Your live site will update in 1-2 minutes.

## 🆘 Common Issues & Solutions

### Issue 1: "fatal: not a git repository"

**Solution**:
```bash
git init
```

### Issue 2: "gh-pages not found"

**Solution**:
```bash
npm install --save-dev gh-pages
npm run deploy
```

### Issue 3: Deploy command fails

**Solution**:
```bash
# Make sure you're in the right directory
pwd

# Should show: /Users/edwardzhang/Desktop/Website
# If not, navigate there:
cd /Users/edwardzhang/Desktop/Website

# Try again
npm run deploy
```

### Issue 4: Blank page after deployment

**Solutions**:
1. Check `homepage` in `package.json` is correct
2. Make sure it matches your GitHub Pages URL exactly
3. Redeploy:
   ```bash
   npm run deploy
   ```

### Issue 5: Images not showing

**Solution**:
1. Make sure images are in `public/` folder
2. Use paths starting with `/` (e.g., `/image.jpg`)
3. Commit images to git:
   ```bash
   git add public/
   git commit -m "Add images"
   git push
   npm run deploy
   ```

### Issue 6: "Permission denied"

**Solution**:
```bash
# Remove existing remote
git remote remove origin

# Re-add with correct URL
git remote add origin https://github.com/yourusername/your-repo-name.git

# Try again
git push -u origin main
```

### Issue 7: Changes not showing on live site

**Solution**:
1. Wait 2-3 minutes (GitHub Pages needs time)
2. Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
3. Clear browser cache
4. Check deployment succeeded:
   ```bash
   git log origin/gh-pages
   ```

## 🔐 Using SSH Instead of HTTPS

If you prefer SSH:

```bash
git remote remove origin
git remote add origin git@github.com:yourusername/your-repo-name.git
git push -u origin main
```

## ✅ Deployment Checklist

Before deploying:

- [ ] Customized all content in `src/data/` files
- [ ] Added your images to `public/` folder
- [ ] Updated `homepage` in `package.json`
- [ ] Tested locally with `npm start`
- [ ] Created GitHub repository
- [ ] Repository name matches `package.json`

## 📊 Checking Deployment Status

### On GitHub:
1. Go to your repository
2. Click **Actions** tab
3. See latest deployment status

### Via Terminal:
```bash
# Check remote URL
git remote -v

# Check gh-pages branch exists
git branch -a

# View deployment history
git log origin/gh-pages
```

## 🌐 Custom Domain (Optional)

Want to use your own domain (e.g., `www.yourname.com`)?

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. In your repository, go to **Settings** → **Pages**
3. Enter your custom domain
4. Update your domain's DNS settings:
   - Add CNAME record pointing to `yourusername.github.io`
5. Wait for DNS propagation (up to 24 hours)

Update `package.json`:
```json
"homepage": "https://www.yourname.com",
```

Then redeploy:
```bash
npm run deploy
```

## 🎯 Pro Tips

### Tip 1: Preview Before Deploying
```bash
npm run build
npx serve -s build
```
Visit `http://localhost:3000` to preview production build.

### Tip 2: Automate Deployment
Add to `.github/workflows/deploy.yml` for automatic deployments on push.

### Tip 3: Check Build Size
```bash
npm run build
```
Check the `build/` folder size. Smaller is better!

### Tip 4: Use Branches
- `main` - Your source code
- `gh-pages` - Deployed build (auto-created)
- `develop` - Work in progress (optional)

## 📱 Sharing Your Site

After deployment, share your portfolio:

- **Direct link**: `https://yourusername.github.io/your-repo-name`
- **Add to LinkedIn**: Profile → Contact Info → Website
- **Add to GitHub profile**: Settings → Profile → Website
- **Add to resume**: Include the URL
- **Social media**: Share with #webdev #portfolio

## 🔄 Continuous Workflow

Daily workflow:

```bash
# Make changes to your files
# Save everything

# Test locally
npm start

# If everything looks good:
git add .
git commit -m "Describe your changes"
git push
npm run deploy

# Wait 1-2 minutes, check live site!
```

## 🎉 You're Deployed!

Your portfolio is now live on the internet! 

**Next steps**:
- Add the URL to your resume
- Share on LinkedIn
- Include in job applications
- Keep updating with new projects

Need help? Check the main README.md or open an issue on GitHub.

Happy deploying! 🚀

