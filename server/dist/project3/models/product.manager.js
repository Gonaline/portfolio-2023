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
const product = table_enum_1.TABLE.PRODUCT;
class ProductManager {
    constructor() {
        this.connection = database_1.default;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT id, product_name, first_image FROM ${product} ORDER BY product_order`;
            const [rows] = yield this.connection.execute(sql);
            return rows;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT * FROM ${product} WHERE id = ?`;
            const [rows] = yield this.connection.execute(sql, [id]);
            return rows;
        });
    }
}
exports.default = ProductManager;
