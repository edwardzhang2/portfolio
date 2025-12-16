# Quick Customization Guide

This guide helps you quickly customize your portfolio website without diving into code.

## 🎯 5-Minute Quick Start

### 1. Update Your Name & Info (2 minutes)

**File**: `src/data/hero.js` (NEW!)
```javascript
name: "Edward Zhang",
tagline: "Your custom tagline...",
```

**File**: `src/data/contact.js`
```javascript
email: 'zhange2@sas.upenn.edu',
github: 'https://github.com/edwardzhang2',
linkedin: 'https://linkedin.com/in/edwardzhang2',
```

**File**: `src/data/about.js`
```javascript
name: 'Edward Zhang',
title: 'Your Title',
```

### 2. Choose Your Color (1 minute)

**File**: `src/data/theme.js`
```javascript
accentColor: '#3B82F6',  // Change this!
```

**Popular choices**:
- Blue: `#3B82F6`
- Green: `#10B981`  
- Purple: `#8B5CF6`
- Red: `#EF4444`

### 3. Update Your Bio (2 minutes)

**File**: `src/data/about.js`
```javascript
bio: [
  "Write your first paragraph here...",
  "And your second paragraph here...",
],
```

## 📝 Adding Your Projects

**File**: `src/data/projects.js`

### Template for New Project:

```javascript
{
  id: 1,
  title: 'Project Name',
  summary: 'One or two sentences describing your project.',
  tags: ['React', 'Node.js', 'MongoDB'],
  featured: true,  // Shows on homepage
  image: '/project-screenshot.jpg',
  link: 'https://github.com/yourname/project',
  demo: 'https://your-demo.com'  // Optional
},
```

### Steps:
1. Copy the template above
2. Change `id` to the next number (2, 3, 4...)
3. Fill in your project details
4. Set `featured: true` for your best 3 projects
5. Add a comma after the closing `}`

## 🖼️ Adding Images

### Profile Photo:
1. Save your photo as `profile.jpg` in the `public/` folder
2. Update `src/data/about.js`: 
   ```javascript
   profileImage: '/profile.jpg',
   ```

### Project Screenshots:
1. Save images in `public/` folder (e.g., `project1.jpg`)
2. Update project in `src/data/projects.js`:
   ```javascript
   image: '/project1.jpg',
   ```

### Resume:
1. Save your resume as `resume.pdf` in the `public/` folder
2. It's already configured!

## 🎨 Popular Color Schemes

Copy & paste these into `src/data/theme.js`:

### Professional Blue (Default)
```javascript
accentColor: '#3B82F6',
```

### Modern Green
```javascript
accentColor: '#10B981',
```

### Creative Purple
```javascript
accentColor: '#8B5CF6',
```

### Energetic Orange
```javascript
accentColor: '#F59E0B',
```

### Bold Red
```javascript
accentColor: '#EF4444',
```

### Elegant Pink
```javascript
accentColor: '#EC4899',
```

## 🔤 Changing Fonts

### Option 1: Use Roboto
1. **Update** `src/index.css`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
   ```

2. **Update** `src/data/theme.js`:
   ```javascript
   fontFamily: 'Roboto',
   ```

### Option 2: Use Poppins
1. **Update** `src/index.css`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
   ```

2. **Update** `src/data/theme.js`:
   ```javascript
   fontFamily: 'Poppins',
   ```

## 📞 Social Links

**File**: `src/data/contact.js`

Add or remove social links:

```javascript
socialLinks: [
  {
    name: 'GitHub',
    url: 'https://github.com/yourname',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourname',
    icon: 'linkedin',
  },
  // Add more:
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourname',
    icon: 'twitter',
  }
],
```

## 🏠 Homepage Hero Section

**File**: `src/data/hero.js` (NEW!)

Update your hero content:
```javascript
export const hero = {
  greeting: "Hi, I'm",
  name: "Your Name",
  title: "Your Title",
  tagline: "Your personal tagline...",
  description: "Your description...",
  primaryButton: {
    text: "View Projects",
    link: "/projects"
  },
  secondaryButton: {
    text: "Resume",
    link: "/resume.pdf"
  }
};
```

## ⚙️ Configuration Files Reference

| File | What It Controls |
|------|-----------------|
| `src/data/theme.js` | Colors, fonts, styling |
| `src/data/hero.js` | Hero section content (NEW!) |
| `src/data/projects.js` | All project information |
| `src/data/about.js` | About page content |
| `src/data/contact.js` | Contact info & social links |

## 🚀 Testing Your Changes

After making changes:

```bash
# Save your files
# Then in terminal:
npm start
```

Visit `http://localhost:3000` to see your changes!

## 📋 Checklist Before Deploying

- [ ] Updated name in `about.js`
- [ ] Updated email in `contact.js`
- [ ] Added GitHub & LinkedIn links
- [ ] Added at least 3 projects
- [ ] Chose your accent color
- [ ] Added profile photo
- [ ] Added project screenshots
- [ ] Added resume PDF
- [ ] Tested site locally (`npm start`)
- [ ] Updated `homepage` in `package.json`

## 🎓 Pro Tips

### Make Projects Stand Out
- Use high-quality screenshots (1200x800px recommended)
- Write clear, concise summaries (1-2 sentences)
- Include live demo links when possible
- Use relevant technology tags

### Choose Good Tags
Keep them concise and recognizable:
✅ Good: 'React', 'Node.js', 'MongoDB'
❌ Avoid: 'React.js v18.2', 'Node', 'Mongo Database'

### Writing Your Bio
- Keep it conversational
- Mention 2-3 key skills
- Add a personal touch
- 2-3 paragraphs is perfect

### Color Psychology
- **Blue**: Trust, professionalism, tech
- **Green**: Growth, success, innovation
- **Purple**: Creativity, uniqueness
- **Orange**: Energy, enthusiasm
- **Red**: Passion, boldness

## 🆘 Quick Troubleshooting

### Changes not showing?
1. Save all files
2. Refresh browser (Cmd+R or Ctrl+R)
3. Try hard refresh (Cmd+Shift+R or Ctrl+Shift+R)

### Syntax error?
- Check for missing commas between items
- Check for matching quotes (' or ")
- Check for closing brackets } or ]

### Need help?
- Check the main README.md
- Verify file names are spelled correctly
- Make sure you're editing files in `src/data/`

## 🎉 You're Ready!

Start with the 5-Minute Quick Start above, then customize further as needed. Every change is just an edit away!

**Remember**: 
- Save your files
- Refresh your browser
- Test before deploying

Happy customizing! 🚀

