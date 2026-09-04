# Employee Management System

A responsive Employee Management System built with React and Tailwind CSS. The application provides separate workflows for Admins and Employees, allowing administrators to create, manage, search, filter, edit, and delete tasks while employees can view and update the status of their assigned tasks.

## 🚀 Live Demo

[Add your Vercel deployment link here]

## 📂 GitHub Repository

https://github.com/RohitSingh403/Employee-Management-System

---

## ✨ Features

### 🔐 Authentication

- Admin login
- Employee login
- Role-based dashboard rendering
- Persistent login using `localStorage`
- Logout functionality
- Login session restoration after page refresh
- Demo credentials for testing

### 👨‍💼 Admin Dashboard

Administrators can:

- View overall task statistics
- Create new tasks
- Assign tasks to employees
- View all tasks
- Search tasks
- Filter tasks by:
  - Status
  - Priority
  - Category
  - Employee
- Edit existing tasks
- Delete tasks
- Monitor task progress
- View total, new, accepted, completed and failed task counts

### 👨‍💻 Employee Dashboard

Employees can:

- View their assigned tasks
- View task statistics
- Accept new tasks
- Mark accepted tasks as completed
- Mark tasks as failed
- View completed and failed tasks
- Access only tasks assigned to their account

### 📋 Task Management

Each task contains:

- Task title
- Description
- Due date
- Assigned employee
- Category
- Priority
- Status
- Creation timestamp
- Updated timestamp

Supported task statuses:

```text
New
Accepted
Completed
Failed