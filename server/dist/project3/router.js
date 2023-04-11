"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("./controllers/product.controller"));
const category_controller_1 = __importDefault(require("./controllers/category.controller"));
const technicalFile_controller_1 = __importDefault(require("./controllers/technicalFile.controller"));
const option_controller_1 = __importDefault(require("./controllers/option.controller"));
const color_controller_1 = __importDefault(require("./controllers/color.controller"));
const Project3Router = (0, express_1.Router)();
const productController = new product_controller_1.default();
const categoryController = new category_controller_1.default();
const technicalFileController = new technicalFile_controller_1.default();
const optionController = new option_controller_1.default();
const colorController = new color_controller_1.default();
Project3Router.get('/product/:productId', productController.getProductById);
Project3Router.get('/categories', categoryController.getCategories);
Project3Router.get('/categories-by-product/:productId', categoryController.findCategoriesOfProduct);
Project3Router.get('/category/:convertName', categoryController.getProductsByCategory);
Project3Router.get('/technical-files/:productId', technicalFileController.getTechnicalFiles);
Project3Router.get('/option/:productId', optionController.getOption);
Project3Router.get('/color/:productId', colorController.getColors);
// Project3Router.get(
//   '/colors-first-group/:productId',
//   colorController.getColorsOfFirstGroup
// );
// Project3Router.get(
//   '/colors-second-group/:productId',
//   colorController.getColorsOfSecondGroup
// );
exports.default = Project3Router;
