# Employee Management System

This project is an Employee Management System built with React and Vite. It provides functionalities for managing tasks assigned to employees, including creating, updating, and viewing tasks.

This `README.md` file provides an overview of the project, its features, technologies used, installation instructions, and project structure. It also includes sections for contributing and licensing.

## Features

- **Admin Dashboard**: Allows administrators to create tasks and view all tasks.
- **Employee Dashboard**: Allows employees to view their tasks and update their status.
- **Task Management**: Create, view, and update tasks with different statuses (new, active, completed, failed).
- **Authentication**: Simple login system for admin and employees.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Employee-Management-System.git
   cd Employee-Management-System
   ```

### Project Structure

```markdown
Employee-Management-System/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── components/
│   │   ├── Auth/
│   │   │   └── Login.jsx
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── EmployeeDashboard.jsx
│   │   └── TaskList/
│   │       ├── AcceptTask.jsx
│   │       ├── CompleteTask.jsx
│   │       ├── FailedTask.jsx
│   │       ├── NewTask.jsx
│   │       └── TaskList.jsx
│   ├── context/
│   │   └── AuthProvider.jsx
│   ├── main.jsx
│   ├── other/
│   │   ├── AllTask.jsx
│   │   ├── CreateTask.jsx
│   │   ├── Header.jsx
│   │   ├── TaskListNumber.jsx
│   │   └── localStorage.jsx
│   └── index.css
└── vite.config.js
```
