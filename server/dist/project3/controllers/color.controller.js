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
const color_manager_1 = __importDefault(require("../models/color.manager"));
class ColorController {
    constructor(colorManager = new color_manager_1.default()) {
        this.colorManager = colorManager;
        this.getFixedColor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const productId = req.params.productId;
            return yield this.colorManager
                .findFixedColor(productId)
                .then((result) => {
                if (result.length === 0) {
                    return res.status(200).json(null);
                }
                else {
                    return res.status(200).json(result[0].fixed_color);
                }
            })
                .catch((err) => {
                console.error(err);
                res.sendStatus(500);
            });
        });
        this.getColorsOfFirstGroup = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const productId = req.params.productId;
            return yield this.colorManager
                .findColorsOfFirstGroupByProductId(productId)
                .then((result) => {
                if (!result) {
                    res.sendStatus(404);
                }
                else {
                    const data = [];
                    result.forEach((e) => data.push(e.color_name));
                    return res.status(200).json(data);
                }
            })
                .catch((err) => {
                console.error(err);
                res.sendStatus(500);
            });
        });
        this.getColorsOfSecondGroup = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const productId = req.params.productId;
            return yield this.colorManager
                .findColorsOfSecondGroupByProductId(productId)
                .then((result) => {
                if (result.length === 0) {
                    return res.status(200).json(null);
                }
                else {
                    const data = [];
                    result.forEach((e) => data.push(e.color_name));
                    return res.status(200).json(data);
                }
            })
                .catch((err) => {
                console.error(err);
                res.sendStatus(500);
            });
        });
    }
}
exports.default = ColorController;
