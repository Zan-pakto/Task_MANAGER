const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Body parser

// In-memory storage (Resets when server restarts)
let tasks = [];

/**
 * @route   GET /tasks
 * @desc    Get all tasks
 */
app.get('/tasks', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: tasks,
      message: 'Tasks retrieved successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
});

/**
 * @route   POST /tasks
 * @desc    Create a new task
 */
app.post('/tasks', (req, res) => {
  try {
    const { title } = req.body;

    // Validation: Check if title is missing or empty
    if (!title || title.trim() === '') {
      return res.status(400).json({
        success: false,
        message: 'Title is required and cannot be empty',
      });
    }

    const newTask = {
      id: uuidv4(),
      title: title.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    tasks.push(newTask);

    res.status(201).json({
      success: true,
      data: newTask,
      message: 'Task created successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
});

/**
 * @route   PATCH /tasks/:id
 * @desc    Update task completion status
 */
app.patch('/tasks/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;

    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
      return res.status(404).json({
        success: false,
        message: `Task with id ${id} not found`,
      });
    }

    // Update the completed status if provided in the body
    if (typeof completed !== 'undefined') {
      tasks[taskIndex].completed = Boolean(completed);
    }

    res.status(200).json({
      success: true,
      data: tasks[taskIndex],
      message: 'Task updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
});

/**
 * @route   DELETE /tasks/:id
 * @desc    Delete a task
 */
app.delete('/tasks/:id', (req, res) => {
  try {
    const { id } = req.params;

    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
      return res.status(404).json({
        success: false,
        message: `Task with id ${id} not found`,
      });
    }

    const deletedTask = tasks[taskIndex];
    tasks = tasks.filter((task) => task.id !== id);

    res.status(200).json({
      success: true,
      data: deletedTask,
      message: 'Task deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
});

// Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'API route not found',
  });
});

app.listen(PORT, () => {
  console.log(`Task Manager Server running on http://localhost:${PORT}`);
});
