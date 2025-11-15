**Project Title:** AWEYFARMS

**Project Description:**
This is a fullstack web application built with React and Express. It allows users to purchase fresh farm products from this farm web application, and provides an alternative to the physical markets such as doorstep delivery, online payment integration portal, recipe sharing, etc. The project is designed to be scalable, secure, and user-friendly.

**Tech Stack**
Frontend - React, TailwindCSS, Axios / Rechart
Backend - Node.js, Express.js, MongoDB, JWT Authentication
Deployment: Frontend - Vercel, Backend - Render
GitHub Actions CI/CD

**Key Features**
🔐 User authentication & authorization (JWT)
📊 Dashboard with real-time data
💾 Fully-functional API
📝 CRUD operations
🚀 Responsive UI
📬 Email notifications

**Project Structure**
root/
│
├── frontend/
│ ├── public/
│ ├── src/
│ └── package.json
│
└── backend/
├── src/
├── config/
└── package.json

**Setup Instructions**

git clone https://github.com/your-username/your-repo-name.git

| Method | Endpoint             | Description      |
| ------ | -------------------- | ---------------- |
| POST   | `/api/auth/register` | Register user    |
| POST   | `/api/auth/login`    | Login user       |
| GET    | `/api/products`      | Get all products |
