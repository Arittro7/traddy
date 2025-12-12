# 🗺️ Traddy - Trusted Travel Buddy

A full-stack platform connecting travelers with passionate local experts who offer authentic, personalized experiences. Travelers can discover unique tours, book guides securely, and explore destinations like a true local — while guides can monetize their knowledge and host meaningful experiences.

---

## 🌐 Live Demo

| Service                    | URL                                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------------------- |
| **Frontend (Live)**        | [Traddy](https://traddy.vercel.app/)  |
| **Backend (API Base URL)** | [Traddy-server](https://traddy-server.onrender.com/) |

---

## 🔐 Test Accounts (Sample Credentials)

Use the following accounts for testing the platform:

| Role        | Email                  | Password      |
| ----------- | ---------------------- | ------------- |
| **Admin**   | `admin@gmail.com`      | `123456`      |
| **Tourist** | `pihu@tourist.com`     | `Tourist@123` |
| **Guide**   | `oreo@guide.com`       | `Guide@123`   |

---

## 🚀 Project Overview

Traddy is a community-driven guide platform that enables locals to showcase their city’s hidden treasures, cultural richness, and personal stories through curated tours and experiences. Travelers can easily search, filter, and book guides tailored to their interests — from food walks and adventure outings to cultural immersions and photography journeys.

By opening up guiding opportunities to everyone, Traddy makes tourism more genuine, inclusive, and rooted in local communities.

---

## 🎯 Objectives

- Connect travelers with local guides.
- Allow guides to create and manage tour listings.
- Provide tourists with booking and review capabilities.
- Ensure trust through profiles, verification, and ratings.
- Integrate secure payments for bookings.
- Deliver a modern and engaging user experience.

---

## ⭐ Features

### 👥 User Authentication & Roles

- Email/Password registration & login
- **Roles**: Tourist, Guide, Admin
- JWT-based authentication
- Secure password hashing

### 🧑‍💼 User Profiles (CRUD)

- Common: Name, Profile Picture, Bio, Languages
- Guide: Expertise, Daily Rate
- Tourist: Travel Preferences

### 🗺️ Tour Listings (CRUD)

- Title, Description, Itinerary
- Tour Fee, Duration, Meeting Point, Max Group Size
- Image upload via Cloudinary/ImgBB
- Guide-managed editing & deactivation

### 🔍 Search & Filtering

- City
- Language
- Category
- Price Range

### 📅 Booking Workflow

- Travelers request dates
- Guides accept/decline
- Status: **Pending → Confirmed → Completed/Cancelled**

### ⭐ Review System

- Tourists can review guides after the tour

### 💳 Payments

- Stripe
- Secure booking checkout

---

## 🛠️ Tech Stack

### **Frontend**

- Next.js
- TailwindCSS
- ShadCN

### **Backend**

- Node.js
- Express.js
- MongoDB
- JWT, bcrypt
- Cloudinary

### **DevOps**

- Vercel (Frontend)
- Render (Backend)
---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/arittro7/traddy.git
cd traddy
```

### 2️⃣ Install dependencies

**Frontend**

```bash
npm install
```

**Backend**

```bash
git clone https://github.com/arittro7/traddy-server.git
cd traddy-server
```

```bash
npm install
```

### 3️⃣ Run development servers

**Frontend**

```bash
npm run dev
```

**Backend**

```bash
npm run start:dev
```

---

## 🔑 Environment Variables

### **Backend (.env example)**

```
PORT=value
DB_URL=value
NODE_ENV=value
JWT_ACCESS_SECRET=value
JWT_ACCESS_EXPIRES=value
JWT_REFRESH_SECRET=value
JWT_REFRESH_EXPIRES=value
PASSWORD_SALT_ROUND=value
FRONTEND_URL=value
CLOUDINARY_CLOUD_NAME=value
CLOUDINARY_API_KEY=value
CLOUDINARY_API_SECRET=value
STRIPE_SECRET_KEY=value
STRIPE_WEBHOOK_SECRET=value
```

### **Frontend (.env.local)**

```
NEXT_PUBLIC_API_URL=value
NODE_ENV=value
JWT_SECRET=value
REFRESH_TOKEN_SECRET=value
```

---

## ▶️ Usage Guide

### 🔹 As a Tourist

- Create an account
- Search for tours
- Request bookings
- Pay for confirmed tours
- Leave reviews

### 🔹 As a Guide

- Set up a professional profile
- Create tour listings
- Manage booking requests
- Host tours
- Receive payments

### 🔹 As an Admin

- Manage users
- Manage listings
- Monitor bookings

