import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import dbInit from './db/db.js';
import router from './routes/index.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
import cookieParser from 'cookie-parser';

dbInit();

const app = express();

// middlewares
app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cookieParser())
  .use(
    cors({
      credentials: true,
      origin: 'https://dtodo.onrender.com',
    })
  );
app.use('/api', router);

app.get('/', (req, res) => {
  res.status(200).send('welcome to Todo Api');
});

// error handler middlewares
app.use(notFound).use(errorHandler);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running: http://localhost:${port}`);
});
