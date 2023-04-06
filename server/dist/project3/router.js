"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("./controllers/product.controller"));
const category_controller_1 = __importDefault(require("./controllers/category.controller"));
const Project3Router = (0, express_1.Router)();
const productController = new product_controller_1.default();
const categoryController = new category_controller_1.default();
Project3Router.get('/products', productController.getProducts);
Project3Router.get('/product/:id', productController.getProductById);
Project3Router.get('/categories', categoryController.getCategories);
Project3Router.get('/category/:convertName', categoryController.getProductsByCategory);
exports.default = Project3Router;
