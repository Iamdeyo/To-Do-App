import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
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
      origin: '*',
    })
  );
app.use('/api', router);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

// error handler middlewares
app.use(notFound).use(errorHandler);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running: http://localhost:${port}`);
});
