# Premium Task Manager

A modern, full-stack Task Manager application built with a Node.js/Express backend and a Next.js frontend. Featuring a premium glassmorphism design, real-time filtering, and a seamless user experience.

## ✨ Features
- **Modern UI**: Sleek dark mode with glassmorphism effects and smooth animations.
- **Task Filtering**: Easily view All, Active, or Completed tasks.
- **Full CRUD**: Create, read, update, and delete tasks.
- **In-Memory Storage**: Lightweight setup with no database required (resets on server restart).
- **Docker Ready**: One-command setup using Docker Compose.

---

## 🚀 Quick Start (Docker)

If you have Docker installed, this is the fastest way to get started:

1. Clone or open the project directory.
2. Run the following command in the root folder:
   ```bash
   docker-compose up --build
   ```
3. Open your browser and navigate to:
   - **Frontend**: [http://localhost:3000](http://localhost:3000)
   - **Backend API**: [http://localhost:5000/tasks](http://localhost:5000/tasks)

---

## 🛠️ Manual Setup (Development)

To run the components individually for development:

### 1. Backend Setup
```bash
cd backend
npm install
npm start
```
*Port: 5000*

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
*Port: 3000*

---

## 📂 Project Structure

```text
├── backend/
│   ├── index.js          # Express server & task logic
│   ├── Dockerfile        # Backend container config
│   └── package.json
├── frontend/
│   ├── app/
│   │   ├── page.tsx      # Main React application logic
│   │   └── globals.css   # Premium CSS Design System
│   ├── Dockerfile        # Frontend container config
│   └── package.json
└── docker-compose.yml    # Orchestrates both services
```

---

## 📡 API Endpoints

| Method | Endpoint      | Description                    |
|--------|---------------|--------------------------------|
| GET    | `/tasks`      | Get all tasks                  |
| POST   | `/tasks`      | Create a new task              |
| PATCH  | `/tasks/:id`  | Toggle task completion status  |
| DELETE | `/tasks/:id`  | Delete a task                  |

---

## 💻 Technologies Used
- **Frontend**: Next.js 15, React 19, Vanilla CSS
- **Backend**: Node.js, Express.js, CORS, UUID
- **DevOps**: Docker, Docker Compose
