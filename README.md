# 🛍️ ShopNest — Modern Full-Stack MERN E-Commerce Platform

<div align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png" alt="ShopNest Logo" width="90" />
  <h2>ShopNest — Enterprise MERN Commerce System</h2>
  <p><strong>Architected & Engineered by Deepak Kushwaha</strong></p>

  [![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
  [![Node.js](https://img.shields.io/badge/Node.js-20+-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
  [![Express.js](https://img.shields.io/badge/Express.js-5.x-000000?logo=express&logoColor=white)](https://expressjs.com/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
  [![Redux Toolkit](https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
  [![JWT](https://img.shields.io/badge/Auth-JWT%20Tokens-black?logo=jsonwebtokens)](https://jwt.io/)
  [![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
</div>

---

## 👨‍💻 Developer & Author Information

* **Developer:** **Deepak Kushwaha**
* **Role:** Full Stack MERN Developer
* **LinkedIn:** [linkedin.com/in/deepak-80ku](https://linkedin.com/in/deepak-80ku)
* **GitHub:** [github.com/deepakddkushwah](https://github.com/deepakddkushwah)
* **Email:** [deepakdd975877@gmail.com](mailto:deepakdd975877@gmail.com)

---

## 🌟 Overview & Key Features

**ShopNest** is a full-featured, production-ready E-commerce web platform engineered using the **MERN (MongoDB, Express.js, React.js, Node.js)** architecture. It demonstrates industry-standard software design patterns, including decoupled client-server structures, secure authentication, atomic state management, and real-time administrative analytics.

### 🚀 Key Functional Modules

* **🛍️ Customer Storefront:**
  * Interactive Hero banner, dynamic category filtering, and instant product search.
  * Deep product view with breadcrumb hierarchy, stock levels, and ratings.
  * Persistent shopping cart powered by **Redux Toolkit** and `localStorage` synchronization.
* **🔐 Authentication & Security:**
  * JWT (JSON Web Tokens) bearer authentication for session integrity.
  * Cryptographic password hashing using `bcryptjs` (salt rounds: 10).
  * Protected routes with role-based Access Control (Client vs. Administrator).
* **💳 Checkout & Payment Gateway:**
  * Razorpay payment gateway integration with cryptographic HMAC SHA-256 signature verification.
  * Direct verified checkout option (Cash on Delivery / Instant Demo) for frictionless user testing.
* **📊 Centralized Admin Operations:**
  * High-level analytics dashboard: real-time gross revenue, orders count, product inventory, and customer count.
  * Product CRUD: Add, update, and delete catalog entries with Cloudinary CDN media uploads and URL fallback.
  * Order status management: Mark orders as Paid, Processing, or Delivered.
  * Customer directory inspection with role mapping.

---

## 🏗️ System Architecture

```
shopnest-ecom/
├── backend/
│   ├── config/             # Database connection & Cloudinary setup
│   ├── controllers/        # Request handlers (Auth, Products, Orders, Payments, Analytics)
│   ├── middleware/         # JWT verification & Multer file upload
│   ├── models/             # Mongoose schemas (User, Product, Order)
│   ├── routes/             # RESTful API route definitions
│   ├── utils/              # Email delivery utility (Nodemailer)
│   ├── seed.js             # Initial database seeder
│   └── server.js           # Express application entrypoint
├── frontend/
│   ├── public/             # Static assets, logo, index.html, developer avatar
│   └── src/
│       ├── admin/          # Admin Dashboard & product/order management views
│       ├── components/     # Reusable UI components (Navbar, Footer, ProductCard)
│       ├── context/        # AuthContext for session management
│       ├── pages/          # Storefront views (Home, Shop, Cart, Checkout, Profile, About)
│       ├── redux/          # Redux Toolkit store & cart slices
│       └── styles/         # Tailored Vanilla CSS design system
├── package.json            # Root workspace orchestrator (concurrently)
└── README.md
```

---

## 🚀 Quick Start / Local Setup

### 1️⃣ Prerequisites
* **Node.js** (v18.x or v20.x+)
* **MongoDB** (Local instance or MongoDB Atlas URI)

### 2️⃣ Environment Variables
Create a `.env` file inside the `backend/` directory:

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
MONGO_URI=mongodb://127.0.0.1:27017/shopnest
JWT_SECRET=your_jwt_secret_key_shopnest

# Email Notification Setup (Optional)
EMAIL_USER=deepakdd975877@gmail.com
EMAIL_PASS=your_gmail_app_password
GMAIL_USER=deepakdd975877@gmail.com
GMAIL_PASS=your_gmail_app_password

# Cloudinary Storage (Optional)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Razorpay Gateway (Optional)
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

### 3️⃣ Installation
Run the install command from the root directory to set up both backend and frontend dependencies:

```bash
npm run install-all
```

### 4️⃣ Seed Database
Populate the database with curated flagship products and the default Admin account:

```bash
npm run seed
```

> **🔑 Default Admin Credentials:**
> * **Email:** `admin@shopnest.com`
> * **Password:** `password123`

### 5️⃣ Launch Development Server
Start both Backend (`http://localhost:5000`) and Frontend (`http://localhost:3000`) simultaneously:

```bash
npm run dev
```

---

## 📡 Core REST API Endpoints

| Method | Endpoint | Description | Access |
|---|---|---|---|
| `POST` | `/api/auth/register` | Register new user session | Public |
| `POST` | `/api/auth/login` | Authenticate user & return JWT | Public |
| `GET` | `/api/auth/users` | List all registered accounts | Admin |
| `GET` | `/api/products` | Retrieve catalog products | Public |
| `GET` | `/api/products/:id` | Get single product specification | Public |
| `POST` | `/api/products` | Create new product catalog item | Admin |
| `PUT` | `/api/products/:id` | Update product details or stock | Admin |
| `DELETE` | `/api/products/:id` | Remove product entry | Admin |
| `POST` | `/api/orders` | Place verified order | User |
| `GET` | `/api/orders/myorders`| Retrieve customer order history | User |
| `GET` | `/api/orders` | List all platform orders | Admin |
| `POST` | `/api/payment/order` | Initialize Razorpay payment intent | Public |
| `POST` | `/api/payment/verify`| Cryptographic HMAC payment verification | Public |
| `GET` | `/api/analytics` | Revenue, counts & sales metrics | Admin |

---

## 📄 Postman API Collection
The workspace includes a fully structured API testing collection: **`ShopNest_Postman_Collection.json`**.
Import this directly into Postman to effortlessly test protected client and admin payloads using automated `{{token}}` headers.

---

## 📜 License
This project is licensed under the MIT License — feel free to explore, clone, and deploy.

Designed and engineered with passion by **Deepak Kushwaha**.
