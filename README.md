
# Employee Management System

A modern web application for managing employees, tasks, and role-based dashboards, built with **React** and **Vite**.

---

## 🌟 Overview

The Employee Management System is designed to help organizations streamline employee operations and task tracking. It features a clean user interface and modular architecture that allows easy scalability and future integration with backend services.

---

## 🚀 Features

✅ **User Authentication**
- Login interface to access the system

✅ **Role-Based Dashboards**
- **Admin Dashboard:** Manage employees, monitor tasks
- **Employee Dashboard:** View and manage assigned tasks

✅ **Task Management**
- Accept tasks
- Mark tasks as completed

✅ **Modern Frontend Stack**
- React with Vite for fast development and builds
- Component-based design
- Responsive styling

---

## 🏗️ Project Structure

```
Employee-Management-System/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # App entry point
│   ├── App.css                  # App-level styles
│   ├── index.css                # Global styles
│   ├── assets/
│   │   └── react.svg            # Logo assets
│   └── components/
│       ├── Auth/
│       │   └── Login.jsx        # Login component
│       ├── Dashboard/
│       │   ├── AdminDashboard.jsx
│       │   └── EmployeeDashboard.jsx
│       └── TaskList/
│           ├── AcceptTask.jsx
│           └── CompleteTask.jsx
├── package.json
├── vite.config.js
└── README.md
```


---

## 📦 Installation

To set up the project locally:

1️⃣ **Clone the repository:**

```bash
git clone https://github.com/prince-kumar-singh/Employee-Management-System.git
cd employee-management-system
```

2️⃣ **Install dependencies:**

```bash
npm install
```

---

## 🧑‍💻 Running the Project

Start the development server:

```bash
npm run dev
```

This will launch the app at:

```
http://localhost:5173
```

---
---

## 🔐 Authentication Details

This project uses **local storage-based authentication** with hardcoded credentials for demonstration purposes.

### ✅ Default Credentials

| Role        | Email                   | Password |
|-------------|-------------------------|----------|
| **Admin**   | admin@me.com            | 123      |
| **Employee 1** | employee1@example.com | 123      |
| **Employee 2** | employee2@example.com | 123      |
| **Employee 3** | employee3@example.com | 123      |
| **Employee 4** | employee4@example.com | 123      |
| **Employee 5** | employee5@example.com | 123      |

⚠️ **Important Notes:**
- These credentials are hardcoded in the frontend and stored/managed via `localStorage`.
- This authentication method is **not secure** and is intended **only for local testing, learning, or demonstration** purposes.
- Do **not** use this method in any production environment.
