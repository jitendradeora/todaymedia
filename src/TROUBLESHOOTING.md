# 🔧 Troubleshooting Guide

Complete guide to fixing common issues when setting up and running the project.

---

## 📋 Table of Contents

1. [Installation Issues](#installation-issues)
2. [npm Command Issues](#npm-command-issues)
3. [Port and Server Issues](#port-and-server-issues)
4. [Browser and Display Issues](#browser-and-display-issues)
5. [File and Module Issues](#file-and-module-issues)
6. [Performance Issues](#performance-issues)
7. [VS Code Issues](#vs-code-issues)

---

## 🔴 Installation Issues

### Problem: "npm: command not found" or "'npm' is not recognized"

**Cause**: Node.js is not installed or not in system PATH

**Solutions**:

1. **Install Node.js**:
   - Go to https://nodejs.org/
   - Download LTS version
   - Run installer
   - Restart computer

2. **Verify Installation**:
   ```bash
   node --version
   npm --version
   ```

3. **Add to PATH (Windows)**:
   - Search "Environment Variables"
   - Edit "Path" variable
   - Add: `C:\Program Files\nodejs\`
   - Restart terminal

4. **Add to PATH (Mac/Linux)**:
   ```bash
   echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile
   source ~/.bash_profile
   ```

---

### Problem: "npm install" fails with EACCES errors

**Cause**: Permission issues

**Solutions**:

**Windows**:
1. Run VS Code as Administrator
2. Or run: `npm install --force`

**Mac/Linux**:
```bash
sudo chown -R $USER /usr/local/lib/node_modules
npm install
```

---

### Problem: "npm install" extremely slow or hangs

**Cause**: Network issues or npm cache problems

**Solutions**:

1. **Clear npm cache**:
   ```bash
   npm cache clean --force
   npm install
   ```

2. **Use different registry**:
   ```bash
   npm config set registry https://registry.npmjs.org/
   npm install
   ```

3. **Check internet connection**:
   - Make sure you're connected
   - Try disabling VPN
   - Check firewall settings

---

## 🔴 npm Command Issues

### Problem: "Cannot find package.json"

**Cause**: Terminal is in wrong directory

**Solutions**:

1. **Check current directory**:
   ```bash
   pwd      # Mac/Linux
   cd       # Windows
   ```

2. **Navigate to project folder**:
   ```bash
   cd path/to/arabic-news-website
   ```

3. **In VS Code**:
   - Make sure terminal is at project root
   - You should see `package.json` in folder

---

### Problem: "peer dependency" warnings during install

**Cause**: Version conflicts (usually harmless)

**Solutions**:

1. **Ignore if everything works**:
   - Warnings are okay, errors are not
   - If `npm run dev` works, you're fine

2. **Force install**:
   ```bash
   npm install --legacy-peer-deps
   ```

---

### Problem: "Unsupported engine" error

**Cause**: Node.js version is too old

**Solutions**:

1. **Check Node version**:
   ```bash
   node --version
   ```

2. **Update Node.js**:
   - Should be v18.x or higher
   - Download from https://nodejs.org/
   - Install and restart

---

## 🔴 Port and Server Issues

### Problem: "Port 3000 is already in use"

**Cause**: Another application is using port 3000

**Solutions**:

**Option 1 - Change Port**:
1. Open `vite.config.ts`
2. Change:
   ```typescript
   server: {
     port: 3001, // Change to 3001, 3002, etc.
   }
   ```
3. Save and run `npm run dev`

**Option 2 - Kill Process**:

**Windows**:
```bash
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

**Mac/Linux**:
```bash
lsof -ti:3000 | xargs kill -9
```

---

### Problem: "npm run dev" starts but page won't load

**Cause**: Firewall or browser issue

**Solutions**:

1. **Try different URL**:
   - http://localhost:3000
   - http://127.0.0.1:3000
   - http://0.0.0.0:3000

2. **Check firewall**:
   - Allow Node.js through firewall
   - Temporarily disable firewall to test

3. **Try different browser**:
   - Chrome, Firefox, Edge, Safari

4. **Clear browser cache**:
   - Ctrl + Shift + Delete
   - Clear all cache

---

### Problem: Server starts then immediately crashes

**Cause**: Syntax error or missing dependencies

**Solutions**:

1. **Check terminal for errors**:
   - Read the error message carefully
   - Google the exact error

2. **Reinstall dependencies**:
   ```bash
   rm -rf node_modules
   npm install
   ```

3. **Check for syntax errors**:
   - Look for red underlines in VS Code
   - Fix any TypeScript errors

---

## 🔴 Browser and Display Issues

### Problem: White/blank page in browser

**Cause**: JavaScript error or routing issue

**Solutions**:

1. **Open browser console**:
   - Press F12
   - Click "Console" tab
   - Look for red errors

2. **Check terminal**:
   - Look for build errors
   - Fix any shown errors

3. **Hard refresh**:
   - Windows: Ctrl + Shift + R
   - Mac: Cmd + Shift + R

4. **Check main files**:
   - Make sure `index.html` exists
   - Make sure `main.tsx` exists
   - Make sure `App.tsx` exists

---

### Problem: Styles not loading / looks broken

**Cause**: Tailwind CSS not configured properly

**Solutions**:

1. **Check files exist**:
   - `styles/globals.css` ✓
   - `postcss.config.js` ✓
   - Import in `main.tsx` ✓

2. **Restart server**:
   ```bash
   # Press Ctrl+C to stop
   npm run dev
   ```

3. **Clear Tailwind cache**:
   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```

4. **Check browser**:
   - F12 → Network tab
   - Look for failed CSS requests

---

### Problem: Images not loading

**Cause**: Wrong image path or missing files

**Solutions**:

1. **Check file exists**:
   - Look in `assets/img/` folder
   - Verify filename is correct

2. **Check import path**:
   ```typescript
   // Correct
   import logo from "../assets/img/logo.webp"
   
   // Wrong
   import logo from "./logo.webp"
   ```

3. **Use public folder**:
   - Put images in `public/` folder
   - Reference as `/image.png`

---

### Problem: Hot reload not working (changes don't show)

**Cause**: Vite HMR issue

**Solutions**:

1. **Manual refresh**:
   - Press Ctrl + R in browser

2. **Restart dev server**:
   ```bash
   # Ctrl+C to stop
   npm run dev
   ```

3. **Clear cache**:
   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```

4. **Check file saved**:
   - Make sure you pressed Ctrl+S
   - Check for blue dot on file tab

---

## 🔴 File and Module Issues

### Problem: "Cannot find module" or "Module not found"

**Cause**: Missing dependency or wrong import path

**Solutions**:

1. **Install missing package**:
   ```bash
   npm install package-name
   ```

2. **Check import path**:
   ```typescript
   // Correct
   import { Button } from "./components/ui/button"
   
   // Wrong
   import { Button } from "components/ui/button"
   ```

3. **Reinstall all**:
   ```bash
   rm -rf node_modules
   npm install
   ```

---

### Problem: TypeScript errors everywhere

**Cause**: Type definitions or tsconfig issue

**Solutions**:

1. **Restart TypeScript server**:
   - VS Code: Ctrl+Shift+P
   - Type: "TypeScript: Restart TS Server"
   - Press Enter

2. **Install type definitions**:
   ```bash
   npm install --save-dev @types/react @types/react-dom
   ```

3. **Check tsconfig.json**:
   - Make sure it exists
   - Compare with backup

---

### Problem: "SyntaxError: Unexpected token"

**Cause**: Syntax error in code or wrong file type

**Solutions**:

1. **Check the error line**:
   - Go to the file and line mentioned
   - Look for syntax errors

2. **Common mistakes**:
   - Missing closing bracket `}`
   - Missing semicolon `;`
   - Wrong quotes `"` vs `'`

3. **Check file extension**:
   - Should be `.tsx` not `.ts`
   - Should be `.jsx` not `.js`

---

## 🔴 Performance Issues

### Problem: npm install is very slow

**Cause**: Downloading many packages

**Solutions**:

1. **Be patient**:
   - First install takes 2-5 minutes
   - This is normal

2. **Use faster registry**:
   ```bash
   npm config set registry https://registry.npmmirror.com
   npm install
   ```

3. **Check internet speed**:
   - Need stable connection
   - ~200MB to download

---

### Problem: Dev server is slow / laggy

**Cause**: Large project or computer resources

**Solutions**:

1. **Close other applications**:
   - Free up RAM
   - Close unnecessary browser tabs

2. **Restart dev server**:
   ```bash
   # Ctrl+C
   npm run dev
   ```

3. **Update Node.js**:
   - Use latest LTS version

---

## 🔴 VS Code Issues

### Problem: Terminal not opening

**Cause**: VS Code settings or permissions

**Solutions**:

1. **Try keyboard shortcut**:
   - Press: Ctrl + `

2. **Use menu**:
   - View → Terminal

3. **Restart VS Code**:
   - Close and reopen

---

### Problem: Extensions not working

**Cause**: Extension conflicts or not installed

**Solutions**:

1. **Install recommended extensions**:
   - VS Code will prompt on project open
   - Click "Install All"

2. **Reload VS Code**:
   - Ctrl+Shift+P
   - Type "Reload Window"
   - Press Enter

---

## 🔴 Build Issues

### Problem: "npm run build" fails

**Cause**: Type errors or missing files

**Solutions**:

1. **Fix TypeScript errors**:
   - Look for red squiggles in VS Code
   - Fix all errors

2. **Check all imports**:
   - Make sure all files exist
   - Verify paths are correct

3. **Try dev mode first**:
   ```bash
   npm run dev
   # Fix any errors
   # Then try build
   npm run build
   ```

---

## 📊 Diagnostic Commands

Run these to gather information:

```bash
# Check Node version
node --version

# Check npm version
npm --version

# List installed packages
npm list --depth=0

# Check for outdated packages
npm outdated

# Verify project structure
ls -la    # Mac/Linux
dir       # Windows

# Check port usage
netstat -ano | findstr :3000    # Windows
lsof -i :3000                    # Mac/Linux
```

---

## 🆘 Emergency Reset

If nothing works, do a complete reset:

```bash
# 1. Delete everything
rm -rf node_modules
rm -rf package-lock.json
rm -rf .vite

# 2. Clear npm cache
npm cache clean --force

# 3. Reinstall
npm install

# 4. Try running
npm run dev
```

---

## 📞 Getting More Help

1. **Read error messages carefully**
   - They usually tell you what's wrong

2. **Google the error**
   - Copy exact error message
   - Search on Google

3. **Check terminal output**
   - Look for red errors
   - Note the file and line number

4. **Check browser console**
   - Press F12
   - Look at Console tab

---

## ✅ Prevention Tips

Avoid issues by:
- ✅ Using latest Node.js LTS
- ✅ Keeping VS Code updated
- ✅ Saving files before testing
- ✅ Not editing `node_modules`
- ✅ Not deleting config files
- ✅ Reading error messages
- ✅ Testing in incognito mode
- ✅ Restarting when stuck

---

## 📝 Reporting Issues

When asking for help, include:
1. Error message (exact text)
2. Node.js version (`node --version`)
3. Operating system (Windows/Mac/Linux)
4. What you were doing when error occurred
5. Steps you've already tried

---

**Last Updated**: 2025-10-27  
**Covers**: Common setup and runtime issues  
**Difficulty**: All levels
