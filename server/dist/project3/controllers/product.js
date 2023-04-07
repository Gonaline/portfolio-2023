"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const table_enum_1 = require("../enums/table.enum");
const database = require('../database');
const table = table_enum_1.TABLE.PRODUCT;
const getProducts = (req, res) => {
    database
        .query(`select * from ${table}`)
        .then(([result]) => {
        res.send(result);
    })
        .catch((err) => {
        console.error(err);
        res.status(500).send('Error retrieving data from database');
    });
};
const getProductById = (req, res) => {
    const id = req.params.id;
    database
        .query(`SELECT * FROM ${table} WHERE id = ?`, [id])
        .then(([result]) => {
        res.send(result);
    })
        .catch((err) => {
        console.error(err);
        res.status(500).send('Error retrieving data from database');
    });
};
module.exports = {
    getProducts,
    getProductById,
};
