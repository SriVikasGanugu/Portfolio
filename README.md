# Sri Vikas Ganugu - Portfolio

A modern, interactive portfolio website built with Vue.js and Tailwind CSS. This portfolio showcases my skills, projects, and experience in an engaging and responsive design.

## 🚀 Features

- **Interactive Design**: Smooth animations, hover effects, and interactive components
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Modern UI**: Clean, professional design with modern aesthetics
- **Typewriter Effect**: Animated text effects on the homepage
- **Project Showcase**: Interactive project cards with detailed modals
- **Skills Visualization**: Animated skill bars and technology grids
- **Contact Form**: Functional contact form with validation
- **Smooth Navigation**: Single-page application with smooth transitions

## 🛠️ Technologies Used

- **Vue.js 3**: Progressive JavaScript framework
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server
- **Vue Router**: Client-side routing
- **Font Awesome**: Icons library
- **Google Fonts**: Inter font family

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── SriVikasGanugu_resume.pdf
├── src/
│   ├── components/
│   │   └── Home.vue          # All content (Hero, About, Projects, Skills, Contact)
│   ├── App.vue               # Main app component with navigation
│   ├── main.js              # Vue app entry point
│   └── style.css            # Global styles and Tailwind imports
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## 🎨 Customization

### Colors and Theme
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... customize primary colors
  },
  dark: {
    50: '#f8fafc',
    // ... customize dark theme colors
  }
}
```

### Content Updates
- **Personal Information, Projects, Skills, Contact Info**: Update in `src/components/Home.vue`

### Styling
- Global styles are in `src/style.css`
- Component-specific styles are in Home.vue
- Tailwind utility classes are used throughout

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is implemented with:
- System preference detection
- Manual toggle in navigation
- Persistent preference storage
- Smooth theme transitions

## 🎯 Key Components

### Home Component
- Animated hero section with typewriter effect
- Interactive call-to-action buttons
- Statistics overview
- Featured skills preview
- About, Projects, Skills, and Contact sections all in one file

## 🚀 Deployment

### GitHub Pages
1. **Build and deploy**
   ```bash
   npm run deploy
   ```
   This will build the project and publish the `dist` folder to the `gh-pages` branch using [gh-pages](https://www.npmjs.com/package/gh-pages).
2. **Enable GitHub Pages** in your repository settings, set the source to the `gh-pages` branch.
3. **Set the correct base path** in `vite.config.js` (already set to `/Portfolio/`).

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### Vercel
1. Import your GitHub repository
2. Set framework preset to Vue.js
3. Deploy automatically

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: srivikasganugu@gmail.com
- **GitHub**: [srivikasganugu](https://github.com/srivikasganugu)

---

Built with ❤️ using Vue.js and Tailwind CSS 