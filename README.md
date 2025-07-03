# 📝 My To-Do List App

## 📖 Description
A minimalistic full-stack To-Do list application built with React (frontend) and .NET Web API (backend), connected via Axios and styled using pure CSS modules. This app helps you add and manage your daily tasks easily with a clean and responsive UI.

## 🚀 Features
- Add new tasks
- View all existing tasks
- Clean and attractive user interface
- Responsive layout
- Backend API with SQL Server database

## 🔧 Tech Stack

**Frontend**
- React
- Vite
- Axios
- CSS Modules

**Backend**
- .NET 8 Web API
- Entity Framework Core
- SQL Server

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18 or above)
- .NET SDK (v8.0 or above)
- SQL Server installed locally or hosted

---

### 🔨 Frontend Setup

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app/todo-app
npm install
npm run dev
```

⚙️ Backend Setup

cd ../TodoApi
dotnet ef database update
dotnet run

---

📂 Folder Structure

todo-app/
├── todo-app/               # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── ...
│   ├── public/
│   └── ...
├── TodoApi/                # .NET backend
│   ├── Controllers/
│   ├── Models/
│   ├── Data/
│   └── ...

---

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---


