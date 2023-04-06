"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("./controllers/product.controller"));
const Project3Router = (0, express_1.Router)();
const productController = new product_controller_1.default();
Project3Router.get('/products', productController.getProducts);
Project3Router.get('/product/:id', productController.getProductById);
exports.default = Project3Router;
