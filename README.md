# 📚 Readify

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-HTTP_Client-5A29E4)
![JSON Server](https://img.shields.io/badge/JSON_Server-Mock_API-red)
![License](https://img.shields.io/badge/License-MIT-green)

<p align="center">
  <img src="./src/assets/demo/Readify_Responsive.png" alt="Readify Responsive Preview" width="100%">
</p>

## 🚀 Live Demo

👉 **https://readify-smoky-mu.vercel.app/**

---

## 🎥 Demo Video

👉 **https://drive.google.com/file/d/1dUbItF28IAc6_CSdPOjkEl_i8Zksw4en/view?usp=sharing**

---

## 📖 About the Project

Readify is a modern, responsive bookstore web application built using **React** and **Vite**. It provides dedicated interfaces for both administrators and customers, enabling seamless book browsing, inventory management, shopping cart functionality, user management, and order processing through a **JSON Server** mock REST API.

The application delivers a clean, responsive, and user-friendly experience across desktop, tablet, and mobile devices.

---

## 📑 Table of Contents

- Features
- Project Highlights
- Preview
- Tech Stack
- Folder Structure
- Installation
- Running the Project
- Usage
- Responsive Design
- Performance
- Security
- Future Enhancements
- Contributing
- License
- Author

---

# ✨ Features

### 👤 Authentication

- User Registration
- User Login
- Username Availability Check
- Client-side Validation
- Persistent Login using Local Storage

### 📚 Book Management

- Browse Books
- Search Books
- Category Filtering
- View Book Details
- Quantity Selection
- Stock Management

### 🛒 Shopping Cart

- Add to Cart
- Update Quantity
- Remove Items
- Clear Cart
- Automatic Total Calculation

### 📦 Order Management

- Checkout
- Address Validation
- Order Creation
- Stock Update after Purchase
- Order History

### 👨‍💼 Admin Dashboard

- View All Books
- Search Books
- Add Books
- Edit Books
- Delete Books
- View Users
- View Orders

### 👤 User Dashboard

- Browse Books
- View Cart
- Manage Orders
- Update Profile

### 🎨 UI

- Responsive Design
- Bootstrap Components
- Custom CSS
- Font Awesome Icons

---

# 🌟 Project Highlights

- 📚 Modern Bookstore Interface
- 👨‍💼 Admin & User Dashboards
- 🔐 Role-Based Authentication
- 🛒 Shopping Cart System
- 📦 Order Management
- 📖 Inventory Management
- 📱 Fully Responsive Layout
- ⚡ Fast React + Vite Application

---

# 🖼️ Preview

<p align="center">
  <img src="./src/assets/demo/Readify_Responsive.png" alt="Readify Responsive Preview" width="100%">
</p>

---

# 🛠 Tech Stack

| Category | Technologies |
|-----------|--------------|
| Frontend | React, Vite, React Router DOM |
| Styling | Bootstrap 5, CSS3, Font Awesome |
| State Management | React Hooks |
| HTTP Client | Axios |
| Backend | JSON Server |
| Database | db.json |
| Build Tool | Vite |
| Deployment | Vercel |

---

# 📂 Folder Structure

```text
src/
├── App.jsx
├── App.css
├── index.css
├── main.jsx
├── assets/
│   ├── demo/
│   │   └── Readify_Responsive.png
│   ├── Logo.png
│   ├── hero.png
│   └── bg.png
│
├── Components/
│   ├── AddBook.jsx
│   ├── AdminDashbord.jsx
│   ├── AdminProfile.jsx
│   ├── AllBooks.jsx
│   ├── Client.jsx
│   ├── EditBook.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Navbar.jsx
│   ├── OrderPage.jsx
│   ├── ShowBook.jsx
│   ├── UserAllBooks.jsx
│   ├── UserCart.jsx
│   ├── UserDashbord.jsx
│   ├── UserPage.jsx
│   ├── UserProfile.jsx
│   ├── UserViewBook.jsx
│   ├── ViewPage.jsx
│   ├── css/
│   └── pages/
│       ├── LandingPage.jsx
│       ├── LoginPage.jsx
│       └── SignupPage.jsx
│
└── db.json
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/ShafrinSulthan/Readify.git
```

```bash
cd Readify
```

## Install Dependencies

```bash
npm install
```

## Start JSON Server

```bash
npm run server
```

## Start Development Server

```bash
npm run dev
```

---

# ▶️ Running the Project

Frontend

```bash
npm run dev
```

Backend (Mock API)

```bash
npm run server
```

Open your browser and visit:

```
http://localhost:5173
```

---

# 🌐 Environment Variables

No environment variables are currently required.

The application communicates with a local **JSON Server** for data storage.

---

# 📖 Usage

### Customer

- Register a new account
- Login
- Browse Books
- Search Books
- Filter by Category
- View Book Details
- Add Books to Cart
- Update Cart Quantity
- Checkout
- View Orders
- Update Profile

### Administrator

- Login as Admin
- Manage Books
- Add Books
- Edit Books
- Delete Books
- View Users
- View Orders
- Manage Inventory

---

# 📱 Responsive Design

Readify is fully responsive and optimized for:

- 💻 Desktop
- 📱 Mobile
- 📟 Tablet

Bootstrap's responsive grid system and custom CSS ensure a seamless user experience across different screen sizes.

---

# ⚡ Performance

Current optimizations include:

- Fast Vite Development Server
- Efficient React Component Rendering
- Lightweight Project Structure
- Axios for Efficient API Requests

Future improvements may include:

- Lazy Loading
- Code Splitting
- Memoization
- Image Optimization

---

# 🔒 Security

Current implementation includes:

- Client-side Form Validation
- Username Validation
- Password Validation
- Role-Based Navigation
- Persistent Login using Local Storage

Future improvements:

- JWT Authentication
- Protected Backend APIs
- Password Hashing
- Refresh Tokens

---

# 📌 Future Enhancements

- JWT Authentication
- Wishlist
- Dark Mode
- Payment Gateway Integration
- Product Reviews
- Ratings
- Pagination
- Book Recommendations
- Email Notifications
- Unit Testing
- Backend Database Integration
- Cloud Image Uploads

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature/new-feature
```

5. Create a Pull Request

---

# 📜 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Shafrin M**

📧 Email: shafrinmunavarsulthan@gmail.com

🔗 LinkedIn: [https://www.linkedin.com/in/your-linkedin-profile](https://www.linkedin.com/in/shafrin-m-40321b259/)

🐙 GitHub: [https://github.com/ShafrinSulthan](https://github.com/ShafrinSulthan)

---

## ⭐ If you found this project helpful, don't forget to give it a Star!
