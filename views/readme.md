**Developer:** Mihir Patadiya



## Setup & Run
1. Open terminal in project folder.
2. Run: `npm install`
3. Run: `node server.js`
4. Open browser: `http://localhost:3000`
5. 





# 🚗 BMW Web Application Clone

A dynamic multi-page web application inspired by BMW, built using **Node.js**, **Express.js**, and **EJS (Embedded JavaScript Templates)** with standard CSS styling.

---

## 🌟 Features
* **Multi-page Structure:** Includes the Home page, New Cars Search Results, Test Drive booking form, and Car Configuration (Build Your Own) calculator.
* **Dynamic Routing & Data Rendering:** Utilizes Express GET and POST routes to handle user form submissions and pass server-side data directly to EJS templates.
* **Custom Styling:** Designed entirely with standard plain CSS files without using any external utility frameworks.

---

## 📂 Project Structure
```text
third/
│
├── public/
│   └── style.css
├── views/
│   ├── build-car.ejs
│   ├── index.ejs
│   ├── new-car.ejs
│   └── test-drive.ejs
├── package.json
└── server.js
