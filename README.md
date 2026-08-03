# 🔧 FixItNow Frontend

A modern **Home Service Marketplace** built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**. FixItNow allows customers to book home services, technicians to manage services and bookings, and administrators to manage the entire platform.

---

## 🚀 Live Demo

**Frontend:** https://your-frontend-url.vercel.app

**Backend API:** https://your-backend-api.vercel.app

---

## 📂 GitHub Repository

**Frontend Repository**

```
https://github.com/your-username/fixitnow-frontend
```

---

## ✨ Features

### 👤 Authentication

* JWT Authentication
* Secure Login & Registration
* Role-based Access Control
* Protected Routes using Next.js Middleware
* Logout with Cookie Cleanup

---

### 🏠 Public Features

* Responsive Landing Page
* Browse Services
* Service Details
* Technician Listing
* Category Filtering
* Search Services
* Optimized Images with Next.js Image

---

### 👥 Customer Features

* Book Home Services
* Booking History
* Cancel Eligible Bookings
* SSLCommerz Payment Integration
* Payment Success & Cancel Pages
* Leave Reviews
* Booking Status Tracking

---

### 🛠 Technician Features

* Technician Dashboard
* Update Profile
* Upload Profile Picture (Cloudinary)
* Manage Availability
* Accept / Start / Complete Bookings
* View Customer Information

---

### 🛡 Admin Features

* Dashboard Overview
* User Management
* Ban / Unban Users
* Category CRUD
* Booking Management

---

## 📊 Booking Workflow

```
Customer Books Service
        │
        ▼
REQUESTED
        │
Technician Accepts
        ▼
ACCEPTED
        │
Customer Pays
        ▼
PAID
        │
Technician Starts Work
        ▼
IN_PROGRESS
        │
Technician Completes Job
        ▼
COMPLETED
        │
Customer Leaves Review
```

---

## 💳 Payment Gateway

* SSLCommerz Integration
* Payment Redirect
* Success Page
* Cancel Page
* Booking Status Update After Payment

---

## ☁ Cloudinary Integration

* Technician Profile Image Upload
* Secure Image URL Storage
* Instant Profile Preview

---

## ⚡ State Management

Server State is managed using **TanStack Query**.

Features include:

* Query Caching
* Automatic Refetching
* Cache Invalidation
* Optimistic UI Updates

---

## 📦 Tech Stack

### Frontend

* Next.js 16 (App Router)
* React 19
* TypeScript
* Tailwind CSS
* Shadcn UI
* TanStack Query
* Axios
* React Hook Form
* Zod
* Lucide Icons
* Sonner Toast

### Backend

* Node.js
* Express.js
* Prisma ORM
* PostgreSQL
* JWT Authentication
* SSLCommerz
* Cloudinary

---

## 📁 Project Structure

```
app/
components/
hooks/
services/
lib/
middleware/
providers/
types/
utils/
```

---

## 🔐 Environment Variables

Create a **.env.local** file.

```env
NEXT_PUBLIC_API_URL=YOUR_BACKEND_API

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=YOUR_CLOUD_NAME

NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=YOUR_UPLOAD_PRESET
```

---

## 📥 Installation

Clone the repository

```bash
git clone https://github.com/your-username/fixitnow-frontend.git
```

Go to the project

```bash
cd fixitnow-frontend
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Build production

```bash
npm run build
```

---

## 🧪 Demo Credentials

### Admin

```
Email:
admin@example.com

Password:
********
```

---

## 📖 API Integration

The project consumes the backend APIs for:

* Authentication
* Users
* Categories
* Services
* Bookings
* Payments
* Reviews
* Technician Management
* Admin Dashboard

See **API_INTEGRATION.md** for detailed endpoint mapping.

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

* Desktop
* Laptop
* Tablet
* Mobile

---

## 🎯 Assignment Requirements Covered

* Next.js App Router
* TypeScript
* Tailwind CSS
* TanStack Query
* JWT Authentication
* Middleware Route Protection
* Role-based Dashboard
* CRUD Operations
* SSLCommerz Payment Integration
* Cloudinary Image Upload
* Error Handling
* Loading States
* Responsive UI
* API Integration
* Modern Component Architecture

---

## 👨‍💻 Author

**Ahmed Nakib**

Full Stack Web Developer

GitHub: https://github.com/your-username

LinkedIn: https://www.linkedin.com/in/your-profile

---

## 📄 License

This project was developed for the **Programming Hero Level 2 Assignment 5**.
