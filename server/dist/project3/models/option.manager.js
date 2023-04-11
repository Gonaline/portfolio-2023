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
const database_1 = __importDefault(require("../database"));
const table_enum_1 = require("../enums/table.enum");
const product_option = table_enum_1.TABLE.PRODUCT_OPTION;
const option_group = table_enum_1.TABLE.OPTION_GROUP;
const option_detail = table_enum_1.TABLE.OPTION_DETAIL;
class OptionManager {
    constructor() {
        this.connection = database_1.default;
    }
    findOne(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT og.option_name, od.option_detail_name, od.img_code,
    IF(isnull(od.option_cost), 0, po.option_price) AS option_price
    FROM ${product_option} AS po
    INNER JOIN ${option_group} as og
    ON og.id = po.option_id
    INNER JOIN ${option_detail} as od
    ON od.option_id = po.option_id
    WHERE po.product_id = ?;`;
            const [rows] = yield this.connection.execute(sql, [productId]);
            return rows;
        });
    }
}
exports.default = OptionManager;
