import asyncHandler from 'express-async-handler';
import Todo from '../db/models/todos.js';

const currentDate = new Date().toJSON().slice(0, 10);

// @desc create a to-do
// route POST todos/
// @access private
const createTodo = asyncHandler(async (req, res) => {
  const { title, desc, date } = req.body;

  const todo = await Todo.create({
    title,
    desc,
    date: date ? date : currentDate,
    user: req.user._id,
  });
  if (todo) {
    return res.status(201).json({
      data: todo,
      message: 'Todo  created successfully',
    });
  }
  res.status(400);
  throw new Error('Invaild Data');
});

// @desc get a to-do
// route GET todos/:todoId
// @access private
const getTodo = asyncHandler(async (req, res) => {
  const { todoId } = req.params;

  const todo = await Todo.findOne({ _id: todoId, user: req.user._id });
  if (todo) {
    return res.status(200).json({
      data: todo,
      message: 'Todo Found',
    });
  }
  res.status(400);
  throw new Error('Invaild Data');
});

// @desc get all to-dos
// route GET todos/
// @access private
const getAllTodos = asyncHandler(async (req, res) => {
  const todo = await Todo.find({ user: req.user._id });
  if (todo) {
    return res.status(200).json({
      data: todo,
      message: 'All Todos Found',
    });
  }
  res.status(400);
  throw new Error('Invaild Data');
});
// @desc get all Today to-dos
// route GET todos/
// @access private
const getTodayTodos = asyncHandler(async (req, res) => {
  const todo = await Todo.find({ user: req.user._id, date: currentDate });
  if (todo) {
    return res.status(200).json({
      data: todo,
      message: 'All Today Todos Found',
    });
  }
  res.status(400);
  throw new Error('Invaild Data');
});
// @desc get all Upcoming to-dos
// route GET todos/
// @access private
const getUpcomingTodos = asyncHandler(async (req, res) => {
  const todo = await Todo.find({
    user: req.user._id,
    date: { $gt: currentDate },
  });
  if (todo) {
    return res.status(200).json({
      data: todo,
      message: 'All upcoming Todos Found',
    });
  }
  res.status(400);
  throw new Error('Invaild Data');
});

// @desc update a to-do
// route PUT todos/
// @access private
const updateTodo = asyncHandler(async (req, res) => {
  const { title, desc, completed, todoId } = req.body;

  const todo = await Todo.findOne({
    _id: todoId,
    user: req.user._id,
  });
  if (todo) {
    todo.title = title || todo.title;
    todo.desc = desc || todo.desc;
    todo.completed = completed || todo.completed;

    return res.status(200).json({
      data: todo,
      message: 'Todo Updated',
    });
  }

  res.status(400);
  throw new Error('Invaild Data');
});

// @desc delete a to-do
// route DELETE todos/:todoId
// @access private
const deleteTodo = asyncHandler(async (req, res) => {
  const { todoId } = req.params;

  const todo = await Todo.findOneAndDelete({ _id: todoId, user: req.user._id });
  if (todo) {
    return res.status(200).json({
      data: todo,
      message: 'Todo Deleted',
    });
  }
  res.status(400);
  throw new Error('Invaild Data');
});

export {
  getAllTodos,
  getTodo,
  deleteTodo,
  updateTodo,
  createTodo,
  getTodayTodos,
  getUpcomingTodos,
};
