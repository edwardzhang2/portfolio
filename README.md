# Portfolio Website

A modern, fully responsive personal portfolio website built with React and TailwindCSS. This project is designed to be highly modular and customizable, making it easy to update your content, change colors, and modify layouts.

## 🚀 Features

- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Modular Design**: All components are reusable and customizable
- **Easy Configuration**: All content is stored in separate data files for quick updates
- **Clean & Minimal**: Beautiful, modern design with smooth animations
- **GitHub Pages Ready**: Pre-configured for easy deployment
- **Theme System**: Change colors and fonts from a single configuration file
- **Smooth Navigation**: React Router with smooth scrolling

## 📁 Project Structure

```
Website/
├── public/
│   ├── index.html
│   ├── placeholder.jpg          # Replace with your images
│   └── resume.pdf               # Add your resume here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation bar with responsive menu
│   │   ├── Footer.jsx           # Footer with social links
│   │   ├── Hero.jsx             # Hero section for homepage
│   │   ├── ProjectCard.jsx      # Reusable project card component
│   │   ├── SectionHeader.jsx    # Reusable section headers
│   │   ├── Tag.jsx              # Technology tags
│   │   └── Layout.jsx           # Page wrapper component
│   ├── pages/
│   │   ├── Home.jsx             # Homepage with hero and featured projects
│   │   ├── Projects.jsx         # All projects with filtering
│   │   ├── About.jsx            # About page with bio and skills
│   │   └── Contact.jsx          # Contact information page
│   ├── data/
│   │   ├── theme.js             # Theme configuration (colors, fonts)
│   │   ├── projects.js          # Project data
│   │   ├── about.js             # About page content
│   │   └── contact.js           # Contact information
│   ├── App.jsx                  # Main app component with routing
│   ├── index.jsx                # React entry point
│   └── index.css                # Global styles with Tailwind
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Customization Guide

### 1. Update Your Information

#### Personal Information & Contact

Edit `src/data/contact.js`:

```javascript
export const contact = {
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
  // ... update all fields
};
```

#### About Page Content

Edit `src/data/about.js`:

```javascript
export const about = {
  name: 'Your Name',
  title: 'Full Stack Developer',
  bio: [
    "Your bio paragraph 1...",
    "Your bio paragraph 2...",
  ],
  interests: ['JavaScript', 'React', 'Node.js', ...],
  // ... update experience, education, skills
};
```

#### Projects

Edit `src/data/projects.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: 'Project Name',
    summary: 'Project description...',
    tags: ['React', 'Node.js', ...],
    featured: true,  // Show on homepage
    image: '/project-image.jpg',
    link: 'https://github.com/...',
    demo: 'https://demo-link.com'
  },
  // Add more projects...
];
```

### 2. Change Theme (Colors & Fonts)

Edit `src/data/theme.js`:

```javascript
export const theme = {
  // Change the accent color (buttons, links, highlights)
  accentColor: '#3B82F6',  // Try: '#10B981', '#8B5CF6', '#EF4444'
  
  // Change font family
  fontFamily: 'Inter',  // Try: 'Roboto', 'Poppins', 'Montserrat'
  
  // Customize other colors
  textColor: '#1F2937',
  backgroundColor: '#FFFFFF',
  // ...
};
```

**Available Color Palette Suggestions:**
- Blue: `#3B82F6` (default)
- Green: `#10B981`
- Purple: `#8B5CF6`
- Red: `#EF4444`
- Orange: `#F59E0B`
- Pink: `#EC4899`

### 3. Change Fonts

1. **Choose a font from Google Fonts**: Visit [fonts.google.com](https://fonts.google.com)

2. **Update `src/index.css`**: Replace the import URL

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
```

3. **Update `src/data/theme.js`**:

```javascript
fontFamily: 'Roboto',
```

4. **Update `tailwind.config.js`**:

```javascript
fontFamily: {
  'sans': ['Roboto', 'sans-serif'],
},
```

### 4. Add Your Images

#### Profile Photo
1. Add your photo to `public/` folder as `profile.jpg`
2. Update `src/data/about.js`: `profileImage: '/profile.jpg'`

#### Project Images
1. Add project screenshots to `public/` folder (e.g., `project1.jpg`)
2. Update `src/data/projects.js`: `image: '/project1.jpg'`

#### Resume
1. Add your resume PDF to `public/resume.pdf`
2. Link is already configured in `src/data/contact.js`

### 5. Update Hero Section

Edit the Hero component content in `src/pages/Home.jsx`:

```javascript
<Hero
  name="Your Name"
  tagline="Full Stack Developer & Designer"
  description="Your custom description here..."
/>
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Local Development

1. **Clone or navigate to the project**:
```bash
cd /Users/edwardzhang/Desktop/Website
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server**:
```bash
npm start
```

The site will open at `http://localhost:3000`

4. **Build for production**:
```bash
npm run build
```

## 🚀 Deployment to GitHub Pages

### Step 1: Update package.json

Edit the `homepage` field in `package.json`:

```json
"homepage": "https://yourusername.github.io/your-repo-name"
```

Replace:
- `yourusername` with your GitHub username
- `your-repo-name` with your repository name

### Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository
2. Name it (e.g., `portfolio`)
3. Don't initialize with README (we already have one)

### Step 3: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio setup"

# Add remote repository
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your site
2. Create/update the `gh-pages` branch
3. Deploy your site

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select branch: `gh-pages`
4. Click **Save**

Your site will be live at: `https://yourusername.github.io/your-repo-name`

## 📝 Content Management

### Adding a New Project

Edit `src/data/projects.js`:

```javascript
{
  id: 7,  // Use next available ID
  title: 'New Project',
  summary: 'Brief description...',
  tags: ['React', 'API'],
  featured: true,  // Set to false if not featured
  image: '/new-project.jpg',
  link: 'https://github.com/...',
  demo: 'https://...'  // Optional
}
```

### Removing a Project

Simply delete or comment out the project object in `src/data/projects.js`

### Updating Navigation Links

Edit `src/components/Navbar.jsx` to add/remove navigation items:

```javascript
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  // Add more links here
];
```

## 🎯 Customization Tips

### Change Border Radius (Rounded Corners)

Edit `src/data/theme.js`:
```javascript
borderRadius: '12px',  // Default is 8px
```

### Adjust Shadows

Edit `src/data/theme.js`:
```javascript
shadowMd: '0 8px 12px -1px rgba(0, 0, 0, 0.15)',
```

### Modify Layout Width

In any page/component, change `max-w-7xl` class:
- `max-w-6xl` - Narrower
- `max-w-full` - Full width
- `max-w-4xl` - Much narrower

### Change Section Spacing

Modify `py-20` (padding vertical) in section elements:
- `py-12` - Less spacing
- `py-32` - More spacing

## 🐛 Troubleshooting

### Issue: Site shows blank page after deployment

**Solution**: Make sure `homepage` in `package.json` is correct and matches your GitHub Pages URL.

### Issue: Images not showing

**Solution**: 
1. Make sure images are in the `public/` folder
2. Use paths starting with `/` (e.g., `/image.jpg` not `./image.jpg`)
3. Run `npm run build` and check the build folder

### Issue: Theme colors not updating

**Solution**: 
1. Clear browser cache
2. Restart development server (`npm start`)
3. Check that you're editing `src/data/theme.js`

### Issue: Deploy command not working

**Solution**:
```bash
# Install gh-pages if not installed
npm install --save-dev gh-pages

# Try deploying again
npm run deploy
```

## 📦 Dependencies

- **React** (^18.2.0) - UI library
- **React Router** (^6.20.0) - Navigation
- **TailwindCSS** (^3.3.6) - Styling
- **gh-pages** (^6.1.0) - Deployment

## 🔄 Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update specific package
npm update react-router-dom
```

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

If you encounter any issues:
1. Check this README thoroughly
2. Ensure all data files are properly formatted
3. Check browser console for errors
4. Verify all imports are correct

## 🎉 You're All Set!

Your portfolio is ready to customize and deploy. Make it your own by:
1. ✅ Updating all personal information
2. ✅ Adding your projects
3. ✅ Choosing your color scheme
4. ✅ Adding your images
5. ✅ Deploying to GitHub Pages

Happy coding! 🚀

