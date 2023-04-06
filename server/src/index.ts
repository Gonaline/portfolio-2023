require('dotenv').config();
import express, { Express } from 'express';
import path from 'path';
import cors from 'cors';

const app: Express = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8000;

const { setupRoutes } = require('./router');
setupRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
