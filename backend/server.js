import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('welcome to Todo Api');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running: http://localhost:${port}`);
});
