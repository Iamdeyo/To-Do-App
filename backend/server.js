import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';

dotenv.config();

const app = express();

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
