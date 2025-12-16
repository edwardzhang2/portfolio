# 🚀 Quick Start Guide

Your portfolio website is ready! Follow these steps to get started.

## ⚡ Get Running in 5 Minutes

### 1. Install Dependencies (First Time Only)

Open terminal in this folder and run:

```bash
npm install
```

This installs all required packages. Takes about 1-2 minutes.

### 2. Start Development Server

```bash
npm start
```

Your site will open at: `http://localhost:3000`

## 🎨 Customize Your Content (Next Steps)

### Essential Updates (Do These First!)

1. **Your Information** → Edit `src/data/contact.js`
   - Email, GitHub, LinkedIn

2. **Your Name & Bio** → Edit `src/data/about.js`
   - Name, title, bio paragraphs

3. **Your Projects** → Edit `src/data/projects.js`
   - Add your actual projects

4. **Choose Color** → Edit `src/data/theme.js`
   - Change `accentColor` to your favorite color

### Add Your Files

1. **Profile Photo**
   - Save as `public/profile.jpg`
   - Update path in `src/data/about.js`

2. **Project Screenshots**
   - Save in `public/` folder
   - Update paths in `src/data/projects.js`

3. **Resume**
   - Save as `public/resume.pdf`

## 📝 Available Commands

```bash
npm start          # Start development server
npm run build      # Create production build
npm run deploy     # Deploy to GitHub Pages (after setup)
npm test           # Run tests (if any)
```

## 📚 Documentation

- **CUSTOMIZATION.md** - Detailed guide for customizing everything
- **DEPLOYMENT.md** - Step-by-step deployment to GitHub Pages
- **README.md** - Complete documentation and troubleshooting

## ✅ Quick Checklist

Before deploying:

- [ ] Run `npm install`
- [ ] Run `npm start` to test locally
- [ ] Update all files in `src/data/` folder
- [ ] Add your images to `public/` folder
- [ ] Choose your accent color
- [ ] Update `homepage` in `package.json`
- [ ] Follow DEPLOYMENT.md for GitHub Pages

## 🎯 File Structure Overview

```
src/data/           ← EDIT THESE FILES
  ├── theme.js      ← Colors & fonts
  ├── projects.js   ← Your projects
  ├── about.js      ← About page content
  └── contact.js    ← Contact info

public/             ← ADD YOUR FILES HERE
  ├── profile.jpg   ← Your photo
  ├── resume.pdf    ← Your resume
  └── *.jpg         ← Project images
```

## 🆘 Need Help?

1. Check **CUSTOMIZATION.md** for content changes
2. Check **DEPLOYMENT.md** for deployment help
3. Check **README.md** for troubleshooting

## 🎉 That's It!

You're ready to build an amazing portfolio. Start with:

1. `npm install`
2. `npm start`
3. Open `src/data/contact.js` and start customizing!

Happy coding! 🚀

