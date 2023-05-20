import express from 'express';
import { deleteUser, getUser, updateUser } from '../controllers/users.js';
import { protect } from '../middlewares/authMiddleware.js';

const userRouter = express.Router();

userRouter
  .route('/')
  .get(protect, getUser)
  .put(protect, updateUser)
  .delete(protect, deleteUser);

export default userRouter;
