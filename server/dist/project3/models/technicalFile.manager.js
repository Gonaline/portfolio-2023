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
const technical_file = table_enum_1.TABLE.TECHNICAL_FILE;
class TechnicalFileManager {
    constructor() {
        this.connection = database_1.default;
    }
    findAll(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT file_name
    FROM ${technical_file}
    WHERE product_id = ?`;
            const [rows] = yield this.connection.execute(sql, [productId]);
            return rows;
        });
    }
}
exports.default = TechnicalFileManager;
