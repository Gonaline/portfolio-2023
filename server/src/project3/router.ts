import { Router } from 'express';
import ProductController from './controllers/product.controller';
import CategoryController from './controllers/category.controller';
import TechnicalFileController from './controllers/technicalFile.controller';
import OptionController from './controllers/option.controller';
import ColorController from './controllers/color.controller';

const Project3Router = Router();

const productController = new ProductController();
const categoryController = new CategoryController();
const technicalFileController = new TechnicalFileController();
const optionController = new OptionController();
const colorController = new ColorController();

Project3Router.get('/product/:productId', productController.getProductById);
Project3Router.get('/categories', categoryController.getCategories);
Project3Router.get(
  '/categories-by-product/:productId',
  categoryController.findCategoriesOfProduct
);

Project3Router.get(
  '/category/:convertName',
  categoryController.getProductsByCategory
);
Project3Router.get(
  '/technical-files/:productId',
  technicalFileController.getTechnicalFiles
);
Project3Router.get('/option/:productId', optionController.getOption);
Project3Router.get('/color/:productId', colorController.getColors);

export default Project3Router;
