"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const project3Router = require('./project3/router');
const setupRoutes = (app) => {
    app.get('/', (req, res) => {
        res.send('Hello, welcome to my portfolio!');
    });
    app.use('/stickers-shop', project3Router);
};
module.exports = {
    setupRoutes,
};
