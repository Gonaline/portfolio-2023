"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router = express_1.default.Router();
const router_1 = __importDefault(require("./project3/router")); // 1
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const port = process.env.PORT || 8000;
app.use(router);
app.get('/', (_req, res) => {
    res.send('Hello, welcome to my portfolio!');
});
app.use('/stickers-shop', router_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
