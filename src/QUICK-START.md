# ⚡ Quick Start Guide (3 Minutes)

## First Time Setup

### 1️⃣ Install Node.js
Download from: https://nodejs.org/ (Choose LTS version)

### 2️⃣ Open in VS Code
```
File → Open Folder → Select project folder
```

### 3️⃣ Open Terminal in VS Code
Press: `Ctrl + ` ` (backtick key)

### 4️⃣ Install Dependencies
```bash
npm install
```
⏳ Wait 2-5 minutes...

### 5️⃣ Start Development
```bash
npm run dev
```

### 6️⃣ Open Browser
Visit: **http://localhost:3000**

---

## Daily Development

### ▶️ Start Server
```bash
npm run dev
```

### 🛑 Stop Server
Press `Ctrl + C` in terminal

### 🔄 Restart Server
1. Press `Ctrl + C`
2. Run `npm run dev` again

---

## Common Commands

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Quick Tips

✅ **Auto-Reload**: Save files with `Ctrl+S`, browser refreshes automatically  
✅ **Stop Server**: Press `Ctrl+C` in terminal  
✅ **Change Port**: Edit `vite.config.ts` if port 3000 is busy  
✅ **Clear Cache**: Delete `node_modules`, run `npm install` again  

---

## File Structure (What to Edit)

```
📝 Edit These:
├── components/          ← Your React components
│   ├── Header.tsx
│   ├── HomePage.tsx
│   └── ...
├── data/               ← Static data (articles, authors, etc.)
│   ├── articles.ts
│   └── ...
├── styles/
│   └── globals.css     ← Global styles
└── assets/             ← Images and media

🚫 Don't Edit These:
├── node_modules/       ← Auto-generated
├── dist/               ← Build output
└── .vscode/            ← Editor settings
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Can't find `npm` | Install Node.js |
| Port 3000 busy | Change port in `vite.config.ts` |
| Errors after update | Delete `node_modules`, run `npm install` |
| Blank page | Check terminal for errors |

---

## URLs to Test

- Homepage: http://localhost:3000/
- Articles: http://localhost:3000/articles/news
- Videos: http://localhost:3000/videos
- Search: http://localhost:3000/search

---

## Need More Help?

📖 Read **SETUP-GUIDE.md** for detailed instructions  
📋 Read **README.md** for project overview  
📁 Check **guidelines/** folder for documentation  

---

**Ready to code? Run `npm run dev` and start building! 🚀**
