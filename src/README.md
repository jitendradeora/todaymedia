# Today Media Website - TodayMedia.net

A modern, fully-featured Arabic news website built with React, TypeScript, and Tailwind CSS.

## Features

- ✅ Fully RTL (Right-to-Left) layout
- ✅ Dark/Light theme toggle
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ 3-level mega menu navigation
- ✅ SEO optimized with React Helmet
- ✅ Article listing and detail pages
- ✅ Video section
- ✅ Author pages
- ✅ Tags system
- ✅ Search functionality
- ✅ Sticky header with scroll behavior
- ✅ Arabic Tajawal font
- ✅ Primary color: #c90000
- ✅ Max container width: 1366px

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **VS Code** - [Download here](https://code.visualstudio.com/)

## Setup Instructions

### 1. Install Node.js

1. Download and install Node.js from [nodejs.org](https://nodejs.org/)
2. Verify installation by opening a terminal and running:
   ```bash
   node --version
   npm --version
   ```

### 2. Open Project in VS Code

1. Open VS Code
2. Click **File** → **Open Folder**
3. Select the project folder containing this README

### 3. Install Dependencies

Open the integrated terminal in VS Code:

- Press `` Ctrl + ` `` (backtick) or
- Click **Terminal** → **New Terminal**

Run the following command:

```bash
npm install
```

This will install all required packages (React, TypeScript, Tailwind CSS, etc.)

### 4. Start Development Server

After installation completes, run:

```bash
npm run dev
```

You should see output like:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

The website will automatically open in your browser at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server (with hot reload)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
├── App.tsx                  # Main app component with layout
├── main.tsx                 # Entry point and routing
├── index.html              # HTML template
├── components/             # React components
│   ├── Header.tsx         # Navigation and header
│   ├── Footer.tsx         # Footer component
│   ├── HomePage.tsx       # Home page
│   ├── ArticleListingPage.tsx
│   ├── ArticleDetailsPage.tsx
│   ├── VideoPage.tsx
│   ├── SearchPage.tsx
│   ├── AuthorPage.tsx
│   ├── TagsPage.tsx
│   └── ui/                # Shadcn UI components
├── data/                  # Static data files
│   ├── articles.ts
│   ├── authors.ts
│   ├── tags.ts
│   └── videos.ts
├── styles/
│   └── globals.css        # Global styles and Tailwind
└── assets/                # Images and media

```

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS
- **Shadcn/ui** - UI component library
- **Lucide React** - Icon library
- **React Helmet** - SEO meta tags
- **Tajawal Font** - Arabic typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Port 3000 is already in use

If port 3000 is occupied, you can change it in `vite.config.ts`:

```typescript
server: {
  port: 3001, // Change to any available port
}
```

### Module not found errors

Try deleting `node_modules` and reinstalling:

```bash
rm -rf node_modules
npm install
```

### Styles not loading

Make sure Tailwind CSS is properly configured and `globals.css` is imported in `main.tsx`

## Development Tips

1. **Hot Reload**: Changes to `.tsx` files will automatically refresh the browser
2. **TypeScript**: VS Code will show type errors inline
3. **RTL Layout**: The site uses `dir="rtl"` in `index.html` for proper Arabic text direction
4. **Theme Toggle**: Click the moon/sun icon in the header to switch between dark/light themes

## Need Help?

- Check the `guidelines/` folder for detailed documentation
- Review `SEO-Documentation.md` for SEO implementation details
- Examine data files in `data/` folder for content structure examples

## License

This project is proprietary and confidential.