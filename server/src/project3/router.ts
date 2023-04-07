import { Router } from 'express';
import ProductController from './controllers/product.controller';
import CategoryController from './controllers/category.controller';

const Project3Router = Router();

const productController = new ProductController();
const categoryController = new CategoryController();

Project3Router.get('/products', productController.getProducts);
Project3Router.get('/product/:id', productController.getProductById);

Project3Router.get('/categories', categoryController.getCategories);
Project3Router.get(
  '/category/:convertName',
  categoryController.getProductsByCategory
);

export default Project3Router;
