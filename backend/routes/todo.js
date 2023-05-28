import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodayTodos,
  getTodo,
  getUpcomingTodos,
  updateTodo,
} from '../controllers/todo.js';

const todoRouter = express.Router();

todoRouter
  .route('/')
  .post(protect, createTodo)
  .put(protect, updateTodo)
  .get(protect, getAllTodos);
todoRouter.get('/today', protect, getTodayTodos);
todoRouter.get('/upcoming', protect, getUpcomingTodos);
todoRouter.route('/:todoId').get(protect, getTodo).delete(protect, deleteTodo);

export default todoRouter;
