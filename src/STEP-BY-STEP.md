# 🎯 Step-by-Step Setup Guide

Follow these steps exactly to get your project running!

---

## 📥 Part 1: Install Prerequisites (One-Time Setup)

### Step 1: Install Node.js

1. 🌐 Open your web browser
2. 🔗 Go to: **https://nodejs.org/**
3. 💚 Click the **LTS** button (Long Term Support version)
4. 💾 Download will start automatically
5. 📂 Open the downloaded file
6. ▶️ Follow the installation wizard:
   - Click "Next" → "Next" → "Next" → "Install"
7. ⏳ Wait for installation (1-2 minutes)
8. ✅ Click "Finish"

### Step 2: Verify Node.js Installation

1. 🪟 **Windows**: Press `Win + R`, type `cmd`, press Enter
   - 🍎 **Mac**: Press `Cmd + Space`, type `terminal`, press Enter
2. ⌨️ Type: `node --version`
3. ⏎ Press Enter
4. ✅ You should see: `v18.x.x` or similar
5. ⌨️ Type: `npm --version`
6. ⏎ Press Enter
7. ✅ You should see: `9.x.x` or similar

> ❌ If you see "command not found", restart your computer and try again.

### Step 3: Install Visual Studio Code

1. 🌐 Open your web browser
2. 🔗 Go to: **https://code.visualstudio.com/**
3. 💾 Click "Download" for your operating system
4. 📂 Open the downloaded file
5. ▶️ Follow the installation wizard
6. ✅ Launch VS Code

---

## 🚀 Part 2: Open and Setup Project

### Step 4: Open Project in VS Code

1. 📂 Locate your project folder on your computer
   - Example: `C:\Users\YourName\Desktop\arabic-news-website`
2. 🖱️ Open VS Code
3. 📁 Click **File** → **Open Folder**
4. 🎯 Navigate to your project folder
5. ✅ Click **Select Folder**
6. ⏳ Wait a moment for VS Code to load the project

### Step 5: Open Terminal in VS Code

**Option A - Keyboard Shortcut (Fastest):**
- Press: **Ctrl + `** (the backtick key, usually above Tab)

**Option B - Menu:**
1. 📋 Click **View** in the top menu
2. 🖥️ Click **Terminal**

**Option C - Top Menu:**
1. Click **Terminal** in the top menu
2. Click **New Terminal**

You should see a panel open at the bottom of VS Code.

### Step 6: Install Project Dependencies

1. ⌨️ In the terminal at the bottom, type:
   ```bash
   npm install
   ```
2. ⏎ Press **Enter**
3. ⏳ Wait patiently (2-5 minutes)
4. 📦 You'll see lots of text scrolling - this is normal!
5. ✅ When complete, you'll see:
   ```
   added 1234 packages in 3m
   ```
6. 🎉 A new `node_modules` folder appears in your project

> ⚠️ **Important**: Don't close the terminal or VS Code during installation!

---

## ▶️ Part 3: Run the Website

### Step 7: Start Development Server

1. ⌨️ In the terminal, type:
   ```bash
   npm run dev
   ```
2. ⏎ Press **Enter**
3. ⏳ Wait 3-5 seconds
4. ✅ You'll see:
   ```
   VITE v5.x.x  ready in 500 ms

   ➜  Local:   http://localhost:3000/
   ➜  Network: use --host to expose
   ```

### Step 8: Open Website in Browser

1. 🌐 Your browser should **automatically open**
2. 📍 If not, manually open: **http://localhost:3000**
3. 🎉 You should see the Arabic News Website!

---

## 🎨 Part 4: Start Developing

### Your Development Workflow:

1. ✏️ **Edit Files**:
   - Open any `.tsx` file in the `components/` folder
   - Make changes
   - Press `Ctrl + S` to save

2. 🔄 **See Changes**:
   - Browser automatically refreshes
   - Changes appear instantly!

3. 🛑 **Stop Server** (when done):
   - Click in the terminal
   - Press `Ctrl + C`
   - Type `Y` and press Enter

4. ▶️ **Start Again** (next day):
   - Open VS Code
   - Press `Ctrl + `` to open terminal
   - Type: `npm run dev`
   - Press Enter

---

## 📍 Visual Guide

```
┌─────────────────────────────────────┐
│  1. Install Node.js from nodejs.org │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│  2. Install VS Code                 │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│  3. Open Project Folder in VS Code  │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│  4. Open Terminal (Ctrl + `)        │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│  5. Type: npm install               │
└─────────────────────────────────────┘
              ↓ (wait 2-5 min)
┌─────────────────────────────────────┐
│  6. Type: npm run dev               │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│  7. Open http://localhost:3000      │
└─────────────────────────────────────┘
              ↓
          🎉 SUCCESS!
```

---

## ✅ Success Checklist

After completing all steps, you should have:

- [x] Node.js installed (checked with `node --version`)
- [x] VS Code installed and running
- [x] Project folder opened in VS Code
- [x] Terminal visible at bottom of VS Code
- [x] `npm install` completed successfully
- [x] `node_modules` folder in your project
- [x] Development server running (`npm run dev`)
- [x] Website visible at http://localhost:3000
- [x] Arabic news website displaying correctly

---

## 🆘 Troubleshooting Common Issues

### ❌ "npm: command not found"
**What this means**: Node.js is not installed  
**Fix**: 
1. Install Node.js from nodejs.org
2. Restart your computer
3. Try again

---

### ❌ "Port 3000 is already in use"
**What this means**: Another program is using port 3000  
**Fix**: 
1. Open `vite.config.ts`
2. Find `port: 3000`
3. Change to `port: 3001`
4. Save file
5. Run `npm run dev` again

---

### ❌ Terminal shows many red errors
**What this means**: Something went wrong during installation  
**Fix**:
1. Delete the `node_modules` folder
2. In terminal type: `npm install`
3. Wait for completion
4. Try `npm run dev` again

---

### ❌ Website shows blank white page
**What this means**: JavaScript error or files missing  
**Fix**:
1. Check terminal for error messages
2. Make sure all project files are present
3. Try refreshing browser (Ctrl + R)
4. Check browser console (F12)

---

### ❌ "Cannot find module"
**What this means**: A file is missing or path is wrong  
**Fix**:
1. Make sure all files are in the project folder
2. Run `npm install` again
3. Restart VS Code

---

## 🎓 What You Just Did

1. ✅ Installed **Node.js** - JavaScript runtime
2. ✅ Installed **VS Code** - Code editor
3. ✅ Installed **npm packages** - Project dependencies
4. ✅ Started **Vite server** - Development server
5. ✅ Opened **website** - Your React app

---

## 📚 Next Steps

Now that everything is running:

1. 📖 Read **README.md** for project overview
2. 🎨 Explore `components/` folder
3. 📝 Look at `data/` folder for content
4. 🎨 Customize `styles/globals.css`
5. 🚀 Start building!

---

## 💡 Pro Tips

- 💾 **Save Often**: Press `Ctrl + S` frequently
- 🔄 **Auto-Reload**: Browser refreshes when you save
- 🎯 **Shortcut**: `Ctrl + `` opens/closes terminal
- 📁 **File Explorer**: Left sidebar in VS Code
- 🔍 **Search**: Press `Ctrl + P` to quick-search files
- 🐛 **Debugging**: Check terminal for errors

---

## 📞 Still Need Help?

1. Read **SETUP-GUIDE.md** for detailed explanations
2. Read **QUICK-START.md** for command reference
3. Search your error message on Google
4. Check the terminal output carefully

---

## 🎉 Congratulations!

You've successfully set up your development environment!

**Your website is running at: http://localhost:3000**

Happy coding! 🚀

---

**Time to Complete**: 15-20 minutes  
**Difficulty**: Beginner-Friendly  
**Last Updated**: 2025-10-27
