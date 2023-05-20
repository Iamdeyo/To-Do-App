import express from 'express';
import authRouter from './auth.js';
import userRouter from './user.js';
import todoRouter from './todo.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/todos', todoRouter);

export default router;
