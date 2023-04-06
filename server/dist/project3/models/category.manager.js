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
const collection_enum_1 = require("../enums/collection.enum");
const product = table_enum_1.TABLE.PRODUCT;
const category = table_enum_1.TABLE.CATEGORY;
const product_category = table_enum_1.TABLE.PRODUCT_CATEGORY;
class CategoryManager {
    constructor() {
        this.connection = database_1.default;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT * FROM ${category}`;
            const [rows] = yield this.connection.execute(sql);
            return rows;
        });
    }
    findProductsByCategory(id, convertName) {
        return __awaiter(this, void 0, void 0, function* () {
            let sql = '';
            if (convertName === collection_enum_1.COLLECTION.ALL_COLLECTIONS_CONVERT_NAME) {
                sql = `SELECT DISTINCT(pc.product_id), c.id AS category_id, c.category_name, p.product_name, IFNULL(p.first_image, CONCAT(pc.product_id, ".png")) AS first_image
      FROM ${product_category} AS pc
      INNER JOIN ${category} AS c
      ON pc.category_id = c.id
      INNER JOIN ${product} AS p
      ON pc.product_id = p.id
      ORDER BY p.product_order`;
                const [rows] = yield this.connection.execute(sql);
                return rows;
            }
            else {
                sql = `SELECT pc.product_id, c.id AS category_id, c.category_name, p.product_name, IFNULL(p.first_image, CONCAT(pc.product_id, ".png")) AS first_image
      FROM ${product_category} AS pc
      INNER JOIN ${category} AS c
      ON pc.category_id = c.id
      INNER JOIN ${product} AS p
      ON pc.product_id = p.id
      WHERE pc.category_id = ?
      ORDER BY p.product_order`;
                const [rows] = yield this.connection.execute(sql, [id]);
                return rows;
            }
        });
    }
}
exports.default = CategoryManager;
