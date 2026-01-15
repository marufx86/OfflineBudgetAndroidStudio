
# Offline Budget Android App

Convert your existing **Web app** (HTML, CSS, JavaScript) into an Android application using a WebView in Kotlin.

This project loads your local `index.html` and related assets into a native Android app so it can run completely offline, just like a regular app.

---

## 📁 Project Structure
```
app/
 └─ src/
     └─ main/
         ├─ java/...
         ├─ res/...
         └─ assets/
             ├─ index.html
             ├─ style.css
             └─ script.js
```

**Modify this file according to your need:**

`app/src/main/java/com/maruf/offlinebudget/MainActivity.kt`

---

## 🚀 Getting Started

### 1. Open in Android Studio

- Open Android Studio.
- Choose Open an existing project.
- Select your project folder.

### 2. Verify Asset Files

Ensure your web app files are here:

`app/src/main/assets/`

This folder must contain:

- index.html
- style.css (optional)
- script.js (optional)

### 3. Update MainActivity.kt to load the local Web file

Located under: `app/src/main/java/com/maruf(username)/offlinebudget(projectname)/MainActivity.kt`

### 4. ▶️ Run the App

- Connect an Android device or start an emulator.
- Click Run in Android Studio.
- Your offline web app should appear inside the Android app.

---

## 🎥 Tutorial Reference

This setup is based on a YouTube tutorial showing how to convert a web app into an Android WebView app:

[![YouTube Video](https://img.youtube.com/vi/FI2z1cR_3J8/maxresdefault.jpg)](https://youtu.be/FI2z1cR_3J8)

**Watch here:** https://youtu.be/FI2z1cR_3J8

---

## 🧩 Customization Ideas

- 🎨 Add app launcher icon & splash screen
- 🚪 Add Android navigation or menu UI
- 📊 Integrate analytics or chart libraries
- 🌙 Add dark/light theme support
