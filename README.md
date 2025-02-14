# 🛠️ Form Payload Interceptor - Chrome Extension

🚀 **Form Payload Interceptor** is a Chrome extension that intercepts form submissions and displays their payload data. It allows developers to **capture, debug, and analyze** form data before it is sent to the server.

![GitHub Repo Stars](https://img.shields.io/github/stars/Shiro1n/payload-interceptor?style=social)
![GitHub Forks](https://img.shields.io/github/forks/Shiro1n/payload-interceptor?style=social)
![GitHub License](https://img.shields.io/github/license/Shiro1n/payload-interceptor)

## 📌 Features
👉 **Intercepts form submissions in real-time**  
👉 **Displays captured payloads in a popup UI**  
👉 **Enable/Disable interception easily from the popup**  
👉 **Works on all websites without modifying their code**  
👉 **Stores the last captured payload for future debugging**  
👉 **Dark-mode friendly UI for better readability**  
👉 **Fully compatible with Chrome Manifest V3**

---

## 🚀 Installation Guide
### **1️⃣ Clone or Download the Repository**
```bash
git clone https://github.com/Shiro1n/payload-interceptor.git
cd payload-interceptor
```
Or manually download the ZIP file and extract it.

### **2️⃣ Load the Extension in Chrome**
1. Open **Google Chrome** and go to `chrome://extensions/`
2. Enable **Developer Mode** (toggle in the top right corner)
3. Click **"Load unpacked"**
4. Select the **extension folder** (where you cloned/downloaded the repo)
5. The extension is now installed and ready to use! 🎉

---

## 📌 How to Use
### **1️⃣ Enable or Disable the Interceptor**
- Click the **extension icon** in the Chrome toolbar to open the popup.
- Click the **"Enable"** or **"Disable"** button to start or stop form interception.
- The status will be shown in the popup.

### **2️⃣ View Captured Form Data**
- When you submit a form on any website, the **payload data** will be intercepted.
- Open the popup to see the **last captured form submission** in a scrollable box.

### **3️⃣ Debugging Form Requests**
- Open **DevTools (`F12`) > Console** to see captured form payloads logged in real-time.
- You can also retrieve the last captured form data from **chrome.storage.local**.

---

## 🖠️ Technical Details
- **Language:** JavaScript (Chrome Extension API)
- **Manifest Version:** V3 (Compatible with latest Chrome updates)
- **Permissions Used:**
    - `"activeTab"` → Needed to access forms on webpages
    - `"storage"` → Saves the last captured payload
    - `"scripting"` → Runs content scripts on pages

---

## 🖥️ Screenshots

### 📌 **Popup UI (Dark Mode)**
![Popup Screenshot](https://via.placeholder.com/320x200?text=Popup+UI)

### 📌 **Captured Form Data**
![Captured Data](https://via.placeholder.com/320x200?text=Captured+Payload)

---

## 🛠️ Contributing
We welcome contributions! 🚀  
If you'd like to improve the extension, follow these steps:
1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push the branch (`git push origin feature-branch`)
5. Open a **Pull Request** 🎉

---

## 🐟 License
This project is licensed under the **MIT License**.

---

## 📎 Connect with Me
💬 Have questions or suggestions? Reach out!  
📧 Email: [ebsulus@gmail.com](mailto:ebsulus@gmail.com)  
🌍 Website: [berkesulus.com](https://berkesulus.com)

---

**⭐ If you found this project helpful, consider giving it a star on GitHub!** 🌟

