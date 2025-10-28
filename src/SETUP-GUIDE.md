# 🚀 Complete Setup Guide for VS Code

This guide will walk you through setting up and running the Arabic News Website project on your local machine using Visual Studio Code.

---

## 📋 Prerequisites

### 1. Install Node.js
- **Download**: Visit [https://nodejs.org/](https://nodejs.org/)
- **Choose**: Download the **LTS (Long Term Support)** version
- **Install**: Run the installer and follow the prompts
- **Verify**: Open Command Prompt (Windows) or Terminal (Mac/Linux) and type:
  ```bash
  node --version
  npm --version
  ```
  You should see version numbers like `v18.x.x` and `9.x.x`

### 2. Install Visual Studio Code
- **Download**: Visit [https://code.visualstudio.com/](https://code.visualstudio.com/)
- **Install**: Run the installer
- **Recommended VS Code Extensions** (Optional but helpful):
  - ESLint
  - Tailwind CSS IntelliSense
  - ES7+ React/Redux/React-Native snippets

---

## 📁 Step-by-Step Setup

### Step 1: Download or Clone the Project

1. Download the project folder to your computer
2. Extract it if it's in a ZIP file
3. Remember the location (e.g., `C:\Users\YourName\Desktop\arabic-news-website`)

### Step 2: Open Project in VS Code

1. Open **Visual Studio Code**
2. Click **File** → **Open Folder** (or press `Ctrl+K Ctrl+O`)
3. Navigate to your project folder and click **Select Folder**

### Step 3: Open Integrated Terminal

In VS Code:
- Press **Ctrl + `** (backtick key, usually above Tab)
- OR Click **Terminal** → **New Terminal** from the menu
- OR Click **View** → **Terminal**

The terminal will open at the bottom of VS Code.

### Step 4: Install Dependencies

In the terminal, type:
```bash
npm install
```

Press **Enter** and wait. This will:
- Download all required packages (~200-300 MB)
- Take 2-5 minutes depending on your internet speed
- Create a `node_modules` folder

You'll see progress like:
```
added 1234 packages in 3m
```

### Step 5: Start Development Server

After installation completes, type:
```bash
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

### Step 6: View the Website

- Your default browser will automatically open
- If not, manually open: **http://localhost:3000**
- You should see the Arabic news website! 🎉

---

## 🎯 Quick Commands Reference

| Command | What it does |
|---------|-------------|
| `npm install` | Install all dependencies (run once) |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |

---

## 🔧 Troubleshooting

### Problem: "npm: command not found"
**Solution**: Node.js is not installed or not in PATH
1. Reinstall Node.js from [nodejs.org](https://nodejs.org/)
2. Restart your computer
3. Try again

### Problem: Port 3000 is already in use
**Solution**: Another app is using port 3000
1. Open `vite.config.ts`
2. Change the port number:
   ```typescript
   server: {
     port: 3001, // Change to 3001 or any free port
   }
   ```
3. Run `npm run dev` again

### Problem: EACCES or permission errors
**Solution**: Run with administrator privileges
- **Windows**: Run VS Code as Administrator
- **Mac/Linux**: Use `sudo npm install`

### Problem: Blank page or errors in browser
**Solution**: 
1. Check the terminal for error messages
2. Make sure all files are present in the project folder
3. Try:
   ```bash
   rm -rf node_modules
   npm install
   npm run dev
   ```

### Problem: Styles not loading
**Solution**:
1. Make sure `styles/globals.css` exists
2. Check that Tailwind CSS is configured in `postcss.config.js`
3. Hard refresh browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

---

## 📂 Project File Structure

```
arabic-news-website/
├── 📄 index.html              # HTML entry point
├── 📄 main.tsx                # JavaScript entry point
├── 📄 App.tsx                 # Main app layout
├── 📄 package.json            # Dependencies list
├── 📄 vite.config.ts          # Vite configuration
├── 📄 tsconfig.json           # TypeScript configuration
├── 📁 components/             # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HomePage.tsx
│   └── ui/                    # Shadcn UI components
├── 📁 data/                   # Static data
│   ├── articles.ts
│   ├── authors.ts
│   ├── tags.ts
│   └── videos.ts
├── 📁 styles/
│   └── globals.css            # Global styles
├── 📁 assets/
│   └── img/
│       └── logo.webp
└── 📁 node_modules/           # Dependencies (auto-generated)
```

---

## 💡 Development Tips

### Hot Reload
- Save any `.tsx` file (`Ctrl+S`)
- Browser automatically refreshes
- No need to restart the server!

### TypeScript Errors
- Red squiggly lines show errors in VS Code
- Hover over them to see the issue
- Fix before running

### Testing the Site
1. **Homepage**: http://localhost:3000/
2. **Articles**: http://localhost:3000/articles/news
3. **Videos**: http://localhost:3000/videos
4. **Search**: http://localhost:3000/search
5. **Dark Mode**: Click moon icon in header

### Stopping the Server
- Press `Ctrl+C` in the terminal
- Type `Y` and press Enter
- Or close the terminal

---

## 🌐 Browser Compatibility

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

---

## 📱 Responsive Design

The website is fully responsive:
- 📱 **Mobile**: 320px - 768px
- 📱 **Tablet**: 768px - 1024px
- 💻 **Desktop**: 1024px+
- 🖥️ **Large Desktop**: Up to 1366px container

---

## 🎨 Features

- ✅ Full RTL (Right-to-Left) support
- ✅ Dark/Light theme toggle
- ✅ 3-level mega menu
- ✅ Sticky header with scroll behavior
- ✅ SEO optimized
- ✅ Arabic Tajawal font
- ✅ Mobile responsive
- ✅ Search functionality
- ✅ Video section
- ✅ Author pages
- ✅ Tags system

---

## 📞 Need More Help?

1. Check the terminal for error messages
2. Read error messages carefully
3. Search the error on Google
4. Check `README.md` for more details
5. Review the `guidelines/` folder for documentation

---

## ✅ Checklist

Before you start development, ensure:
- [ ] Node.js is installed (`node --version` works)
- [ ] VS Code is installed
- [ ] Project folder is opened in VS Code
- [ ] Terminal is opened in VS Code
- [ ] `npm install` completed successfully
- [ ] `npm run dev` is running
- [ ] Website opens at http://localhost:3000
- [ ] You can see the Arabic news website

---

## 🎉 You're All Set!

Your development environment is ready. Happy coding! 🚀

The website will automatically reload when you save changes to any file.
Press `Ctrl+C` in the terminal when you want to stop the development server.

---

**Last Updated**: 2025-10-27
**Node Version Required**: 18.x or higher
**Package Manager**: npm
