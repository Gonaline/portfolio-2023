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
const color = table_enum_1.TABLE.COLOR;
const product_color = table_enum_1.TABLE.PRODUCT_COLOR;
class ColorManager {
    constructor() {
        this.connection = database_1.default;
    }
    getColors(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT IF(isnull(pc.fixed_color), "",c.color_name) AS fixed_color,
    IF(isnull(pc.first_group), "",c.color_name) AS first_group,
    IF(isnull(pc.second_group), "",c.color_name) AS second_group
        FROM ${product_color} AS pc
        INNER JOIN ${color} AS c ON c.id = pc.color_id
        WHERE pc.product_id = ?
        ORDER BY c.display_order;`;
            const [rows] = yield this.connection.execute(sql, [productId]);
            return rows;
        });
    }
}
exports.default = ColorManager;
