import { Router } from 'express';
import ProductController from './controllers/product.controller';

const Project3Router = Router();

const productController = new ProductController();

Project3Router.get('/products', productController.getProducts);
// Project3Router.get('/product/:id', productController.getProductById);

export default Project3Router;
