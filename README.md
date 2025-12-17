# React Portfolio with Markdown Content System

A modern, responsive portfolio website built with **React**, **TypeScript**, and **Vite**, featuring a markdown-based content management system. Easily update your portfolio content by editing markdown files without touching the code.

## Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 📝 **Markdown-Based Content** - Edit portfolio content using simple markdown files
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 📱 **Responsive Design** - Works beautifully on all devices
- 🎯 **SEO Friendly** - Semantic HTML and proper structure
- 🔧 **Easy Customization** - Simple to modify colors, styles, and layout

## Project Structure

```
Portfolio/
├── public/
│   └── content/              # Markdown content files
│       ├── about.md
│       ├── experience.md
│       ├── projects.md
│       ├── skills.md
│       └── contact.md
├── src/
│   ├── components/           # React components (TypeScript)
│   │   ├── About/
│   │   │   ├── About.tsx
│   │   │   ├── About.css
│   │   │   └── index.ts
│   │   ├── Contact/
│   │   │   ├── Contact.tsx
│   │   │   ├── Contact.css
│   │   │   └── index.ts
│   │   ├── Experience/
│   │   │   ├── Experience.tsx
│   │   │   ├── Experience.css
│   │   │   └── index.ts
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   ├── Header.css
│   │   │   └── index.ts
│   │   ├── MarkdownRenderer/
│   │   │   ├── MarkdownRenderer.tsx
│   │   │   ├── MarkdownRenderer.css
│   │   │   └── index.ts
│   │   ├── Projects/
│   │   │   ├── Projects.tsx
│   │   │   ├── Projects.css
│   │   │   └── index.ts
│   │   └── Skills/
│   │       ├── Skills.tsx
│   │       ├── Skills.css
│   │       └── index.ts
│   ├── styles/              # Global styles
│   │   ├── index.css
│   │   └── App.css
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/               # Utility functions
│   │   └── markdownLoader.ts
│   ├── App.tsx
│   └── main.tsx
├── tsconfig.json            # TypeScript configuration
├── tsconfig.node.json       # TypeScript config for Vite
├── vite.config.ts          # Vite configuration
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- TypeScript knowledge (helpful but not required)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customizing Content

All portfolio content is stored in markdown files located in `public/content/`:

- **about.md** - About section content
- **experience.md** - Work experience and history
- **projects.md** - Portfolio projects
- **skills.md** - Skills and technologies
- **contact.md** - Contact information

Simply edit these markdown files to update your portfolio content. The changes will be reflected immediately in the application.

### Markdown Features Supported

- Headers (H1-H6)
- Bold and italic text
- Lists (ordered and unordered)
- Links
- Code blocks
- Tables
- Blockquotes
- Images

## Customizing Styles

### Colors

Edit the CSS variables in `src/styles/index.css` to change the color scheme:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  /* ... */
}
```

### Component Styles

Each component has its own CSS file in its component folder (e.g., `src/components/About/About.css`). Modify these files to customize the appearance of specific sections.

## Technologies Used

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **react-markdown** - Markdown rendering
- **remark-gfm** - GitHub Flavored Markdown support

## TypeScript Features

- Full TypeScript support with strict type checking
- Type definitions for all components and utilities
- Path aliases for cleaner imports (`@/components`, `@/utils`, etc.)
- Proper type safety throughout the application

## Deployment

### GitHub Pages (Recommended)

The easiest way to deploy is using GitHub Pages with automatic deployment via GitHub Actions.

**Quick Start:**
1. Create a GitHub repository
2. Push your code to GitHub
3. Go to repository Settings > Pages
4. Select "GitHub Actions" as source
5. Push to main branch - deployment happens automatically!

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed step-by-step instructions.

**Manual Deployment:**
```bash
npm install --save-dev gh-pages
npm run deploy
```

### Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

## License

MIT License - feel free to use this project for your own portfolio!

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

Built with ❤️ using React and Vite

