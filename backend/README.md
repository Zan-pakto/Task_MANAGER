# Task Manager Backend

This is a simple Node.js/Express backend for a Task Manager application.

## Features
- In-memory storage (Resets on server restart)
- CRUD operations for tasks
- JSON response structure
- Error handling
- CORS enabled

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

Start the server using:
```bash
npm start
```
The server will be running on `http://localhost:5000`.

## API Endpoints

### 1. Get All Tasks
- **URL**: `GET /tasks`
- **Response**:
  ```json
  {
    "success": true,
    "data": [],
    "message": "Tasks retrieved successfully"
  }
  ```

### 2. Create Task
- **URL**: `POST /tasks`
- **Body**: `{ "title": "Buy milk" }`
- **Success Response**: `201 Created`
- **Error Response**: `400 Bad Request` (if title is empty)

### 3. Update Task Status
- **URL**: `PATCH /tasks/:id`
- **Body**: `{ "completed": true }`
- **Response**: `200 OK` or `404 Not Found`

### 4. Delete Task
- **URL**: `DELETE /tasks/:id`
- **Response**: `200 OK` or `404 Not Found`
