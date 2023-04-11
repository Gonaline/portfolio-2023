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
const option_manager_1 = __importDefault(require("../models/option.manager"));
class OptionController {
    constructor(optionManager = new option_manager_1.default()) {
        this.optionManager = optionManager;
        this.getOption = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const productId = req.params.productId;
            return yield this.optionManager
                .findOne(productId)
                .then((result) => {
                if (result.length === 0) {
                    return res.status(200).json(null);
                }
                else {
                    const data = [];
                    const detail = [];
                    result.forEach((e) => detail.push({
                        name: e.option_detail_name,
                        price: e.option_price,
                        img_code: e.img_code,
                    }));
                    data.push({ name: result[0].option_name, detail: detail });
                    return res.status(200).json(data[0]);
                }
            })
                .catch((err) => {
                console.error(err);
                res.sendStatus(500);
            });
        });
    }
}
exports.default = OptionController;
