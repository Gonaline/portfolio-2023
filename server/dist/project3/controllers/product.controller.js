"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_manager_1 = __importDefault(require("../models/product.manager"));
class ProductController {
    constructor(productManager = new product_manager_1.default()) {
        this.productManager = productManager;
        this.getProducts = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            return yield this.productManager
                .findAll()
                .then((result) => {
                if (!result) {
                    res.sendStatus(404);
                }
                else {
                    res.status(200).json(result);
                }
            })
                .catch((err) => {
                console.error(err);
                res.sendStatus(500);
            });
        });
        this.getProductById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            return yield this.productManager
                .findOne(id)
                .then((result) => {
                if (!result) {
                    res.sendStatus(404);
                }
                else {
                    res.status(200).json(result[0]);
                }
            })
                .catch((err) => {
                console.error(err);
                res.sendStatus(500);
            });
        });
    }
}
exports.default = ProductController;
