import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import dbInit from './db/db.js';
import router from './routes/index.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';

dbInit();

const app = express();

// middlewares
const allowedOrigins = ['https://dtodo.onrender.com/', 'http://localhost:3000'];
app
  .use(
    cors({
      origin: allowedOrigins,
    })
  )
  .use(express.json())
  .use(express.urlencoded({ extended: true }));
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
