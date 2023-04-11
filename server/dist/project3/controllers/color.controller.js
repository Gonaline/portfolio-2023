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
        // public getFixedColor = async (req: Request, res: Response) => {
        //   const productId: string = req.params.productId;
        //   return await this.colorManager
        //     .findFixedColor(productId)
        //     .then((result) => {
        //       if (result.length === 0) {
        //         return res.status(200).json(null);
        //       } else {
        //         return res.status(200).json(result[0].fixed_color);
        //       }
        //     })
        //     .catch((err: any) => {
        //       console.error(err);
        //       res.sendStatus(500);
        //     });
        // };
        this.getColors = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const productId = req.params.productId;
            return yield this.colorManager
                .getColors(productId)
                .then((result) => {
                if (!result) {
                    res.sendStatus(404);
                }
                else {
                    const data = [];
                    const fixed_color = result.filter((e) => e.fixed_color !== '');
                    const first_group = result
                        .filter((e) => e.first_group !== '')
                        .map((el) => el.first_group);
                    const second_group = result
                        .filter((e) => e.second_group !== '')
                        .map((el) => el.second_group);
                    data.push({
                        fixed_color: fixed_color.length !== 0 ? fixed_color[0].fixed_color : null,
                        first_group: first_group,
                        second_group: second_group,
                    });
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
exports.default = ColorController;
