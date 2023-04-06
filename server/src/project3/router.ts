const project3Router = require('express').Router();
const product = require('./controllers/product');

project3Router.get('/products', product.getProducts);
project3Router.get('/product/:id', product.getProductById);

module.exports = project3Router;
