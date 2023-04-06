import express, { Request, Response } from 'express';
const product3Router = require('./project3/router');

const setupRoutes = (app: any) => {
  app.get('/', (req: Request, res: Response) => {
    res.send('Hello, welcome to my portfolio!');
  });
  app.use('/stickers-shop', product3Router);
};

module.exports = {
  setupRoutes,
};
