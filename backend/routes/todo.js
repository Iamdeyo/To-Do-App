import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodo,
  updateTodo,
} from '../controllers/todo.js';

const todoRouter = express.Router();

todoRouter
  .route('/')
  .post(protect, createTodo)
  .put(protect, updateTodo)
  .get(protect, getAllTodos);
todoRouter.route('/:todoId').get(protect, getTodo).delete(protect, deleteTodo);

export default todoRouter;
