# 📺 Bilibili Story Builder (Frontend)

[![Nuxt](https://img.shields.io/badge/Nuxt-4.x-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![Vue](https://img.shields.io/badge/Vue-3.x-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://vuejs.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

**Share your favorite anime moments from Bilibili to your Stories seamlessly!**

Bilibili Story Builder is a modern web application that serves as the landing page and guide for the **Bilibili Story Builder iOS Shortcut**. It provides a step-by-step interactive experience to help users share high-quality anime content directly to their social media stories.

---

## ✨ Features

- **🚀 Interactive Guide**: Smooth, step-by-step instructions for installing and using the iOS Shortcut.
- **📱 Responsive Design**: Optimized for desktop viewing with a specialized mobile network warning component.
- **🎨 Modern UI**: Built with a vibrant gradient aesthetic and clean typography using Tailwind CSS.
- **🔗 API Integration**: Connects with the Bilibili Story Builder API on RapidAPI.
- **🛠️ Developer Tools**: Integrated Nuxt DevTools for a better development experience.

---

## 🛠️ Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com/) (Vue 3)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Icons**: Font Awesome (integrated in templates)
- **Deployment**: Configured for Node.js/Vercel/Netlify environments

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kang49/bilibili-story-frontend.git
   cd bilibili-story-frontend
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start the development server:**
   ```bash
   yarn dev
   # or
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

### Production

Build the application for production:
```bash
yarn build
# Preview production
yarn preview
```

---

## 📖 How to Use the Shortcut

This frontend guides users through three main steps:
1. **Download**: Obtain the `.shortcut` file from the official release.
2. **Install**: Move the file to the iOS Files app and add it to Shortcuts.
3. **Run**: Use the Share Sheet from the Bilibili app to generate and share your story.

---

## 🤝 Related Projects

- **Backend/Shortcut Logic**: [kang49/bilibili-story-sharing](https://github.com/kang49/bilibili-story-sharing)
- **API**: [Bilibili Story Builder 2 on RapidAPI](https://rapidapi.com/kang49/api/bilibili-story-builder2)

---

Developed with ❤️by [Human](github.com/kang49)