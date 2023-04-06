require('dotenv').config();
import express, { Express, Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
const router = express.Router();
import project3Router from './project3/router'; // 1
const app: Express = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8000;

app.use(router);

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello, welcome to my portfolio!');
});
app.use('/stickers-shop', project3Router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
