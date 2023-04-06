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
const category_manager_1 = __importDefault(require("../models/category.manager"));
const convertText_1 = require("../../utils/convertText");
class CategoryController {
    constructor(categoryManager = new category_manager_1.default()) {
        this.categoryManager = categoryManager;
        this.findAllCategoriesWithConvertName = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.categoryManager.findAll().then((result) => {
                result.forEach((e) => {
                    e.convert_category_name = (0, convertText_1.convertText)(e.category_name);
                });
                return result;
            });
        });
        this.getCategories = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            return yield this.findAllCategoriesWithConvertName()
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
        this.getProductsByCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const convertName = req.params.convertName;
            const categories = yield this.findAllCategoriesWithConvertName();
            if (!categories || categories.length === 0) {
                return [];
            }
            else {
                const [category] = categories.filter((e) => e.convert_category_name === convertName);
                let id;
                if (category === undefined) {
                    id = '';
                }
                else {
                    id = category.id.toString();
                }
                return yield this.categoryManager
                    .findProductsByCategory(id, convertName)
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
            }
        });
    }
}
exports.default = CategoryController;
