# ClickOne Survey Platform 🎯

A modern, responsive survey platform built with React, featuring dark/light mode, animated UI components, and multi-platform survey integration.

## ✨ Features

- 🌓 **Dark/Light Mode Toggle** - Seamless theme switching
- 📱 **Fully Responsive** - Works perfectly on all devices  
- 🎨 **Modern UI/UX** - Beautiful animations and gradients
- 🌐 **Multi-language Support** - Arabic RTL support
- ⚡ **High Performance** - Optimized with Vite
- 🔧 **Modular Architecture** - Clean, maintainable code structure
- 📊 **Real-time Statistics** - Track participation and points
- 🎯 **Survey Integration** - CPX Research, TheoremReach, Pollfish, BitLabs

## 🏗 Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── DarkModeToggle.jsx
│   │   ├── FloatingParticles.jsx
│   │   └── AnimatedCounter.jsx
│   └── pages/
│       ├── HomePage.jsx
│       ├── UserInfoPage.jsx
│       ├── CPXFramePage.jsx
│       ├── RedirectPage.jsx
│       └── DataPage.jsx
├── config/
│   └── theme.js
├── data/
│   └── surveyPlatforms.js
├── utils/
│   └── validation.js
├── styles/
│   └── globals.css
├── App.jsx
└── main.jsx
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone and setup**
```bash
npm create vite@latest clickone-survey --template react
cd clickone-survey
```

2. **Install dependencies**
```bash
npm install react react-dom lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. **Copy the project files**
   - Replace the generated files with the provided components
   - Update `tailwind.config.js` with the provided configuration
   - Add the global styles to your CSS

4. **Start development server**
```bash
npm run dev
```

## 📁 File Descriptions

### Core Components

- **`App.jsx`** - Main application component with state management
- **`main.jsx`** - React app entry point

### Common Components

- **`DarkModeToggle.jsx`** - Theme switcher with smooth animations
- **`FloatingParticles.jsx`** - Background particle animation system
- **`AnimatedCounter.jsx`** - Smooth number counting animations

### Page Components

- **`HomePage.jsx`** - Landing page with survey platform cards
- **`UserInfoPage.jsx`** - Form for collecting user information
- **`CPXFramePage.jsx`** - Embedded CPX Research survey interface
- **`RedirectPage.jsx`** - Loading screen for external redirects
- **`DataPage.jsx`** - Statistics and participation tracking

### Configuration & Data

- **`theme.js`** - Theme configuration for light/dark modes
- **`surveyPlatforms.js`** - Survey platform data and API configuration
- **`validation.js`** - Form validation utilities

## 🎨 Theme System

The app features a comprehensive theme system with separate configurations for light and dark modes:

```javascript
// Light mode - Better contrast and visibility
light: {
  background: 'bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200',
  textPrimary: 'text-gray-900',
  textSecondary: 'text-gray-700',
  cardBg: 'bg-white bg-opacity-90 border-gray-200',
  // ... more theme properties
}

// Dark mode - Easy on the eyes
dark: {
  background: 'bg-gradient-to-br from-gray-900 via-gray-800 to-black',
  textPrimary: 'text-white',
  textSecondary: 'text-gray-200',
  cardBg: 'bg-gray-800 bg-opacity-60 border-gray-600',
  // ... more theme properties
}
```

## 🔧 Customization

### Adding New Survey Platforms

Edit `src/data/surveyPlatforms.js`:

```javascript
{
  id: 5,
  title: "New Survey Platform",
  description: "Platform description in Arabic",
  url: "https://example.com",
  category: "survey category",
  estimatedTime: "10-15 دقيقة",
  points: "100-300 نقطة",
  type: "external", // or "iframe"
  color: "from-blue-500 to-green-500",
  icon: "🎯"
}
```

### Modifying Theme Colors

Update `src/config/theme.js` to change color schemes:

```javascript
buttonPrimary: 'from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700',
glowBorder: 'from-purple-400 to-pink-500',
```

### API Configuration

Update API settings in `src/data/surveyPlatforms.js`:

```javascript
export const API_CONFIG = {
  CPX_RESEARCH: {
    APP_ID: "your_app_id",
    SECURE_KEY: "your_secure_key",
    BASE_URL: "https://offers.cpx-research.com/index.php"
  }
};
```

## 📱 Responsive Design

The platform is fully responsive with:
- Mobile-first approach
- Flexible grid layouts  
- Touch-friendly interactions
- Optimized font sizes
- Collapsible navigation

## 🌐 RTL Support

Full Arabic RTL (Right-to-Left) support:
- Text direction automatically handled
- Arabic font loading (Cairo, Amiri)
- Proper spacing and alignment
- Cultural UI patterns

## 🚀 Performance Optimizations

- **Code Splitting** - Automatic route-based splitting
- **Lazy Loading** - Images and components loaded on demand
- **Bundle Optimization** - Vendor chunks separated
- **Caching Strategy** - Efficient asset caching
- **Minimal Dependencies** - Only essential packages

## 🧪 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production  
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Project Conventions

- **Components** - PascalCase naming
- **Files** - camelCase for utilities, PascalCase for components
- **Styling** - Tailwind utility classes with theme system
- **State** - React hooks with clear naming

## 📦 Deployment

### Production Build

```bash
npm run build
```

### Deploy to Vercel/Netlify

1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Environment Variables

Create `.env` file for production:

```env
VITE_APP_TITLE=ClickOne Survey Platform
VITE_API_BASE_URL=https://api.yourserver.com
VITE_CPX_APP_ID=your_cpx_app_id
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit pull request

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🆘 Troubleshooting

### Common Issues

**Theme not switching properly:**
- Check if `getTheme()` function is imported correctly
- Verify theme configuration in `src/config/theme.js`

**Arabic text not displaying correctly:**
- Ensure Arabic fonts are loaded in `index.html`
- Check RTL direction is set: `<html dir="rtl">`

**Build errors:**
- Clear node_modules: `rm -rf node_modules && npm install`
- Update dependencies: `npm update`

**Survey iframe not loading:**
- Check CORS policies
- Verify API credentials in `surveyPlatforms.js`

---

**Built using React, Tailwind CSS, and Vite**