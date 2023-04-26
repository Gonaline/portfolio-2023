"use strict";
const fs = require('fs');
const mysql = require('mysql2/promise');
const path = require('path');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const pool = mysql.createPool({
    host: process.env.STICKERS_SHOP_DB_HOST,
    port: process.env.STICKERS_SHOP_DB_PORT,
    user: process.env.STICKERS_SHOP_DB_USER,
    password: process.env.STICKERS_SHOP_DB_PASSWORD,
    database: process.env.STICKERS_SHOP_DB_NAME,
});
pool
    .getConnection()
    .then(() => {
    console.log('database is connected OKKKKKKK');
})
    .catch(() => {
    console.warn('Warning:', 'Failed to get a DB connection.', 'Did you create a .env file with valid credentials?', "Routes using models won't work as intended");
});
const models = fs
    .readdirSync(__dirname)
    .filter((file) => file !== 'AbstractManager.ts' && file !== 'index.ts')
    .reduce((acc, file) => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const Manager = require(path.join(__dirname, file));
    // eslint-disable-next-line no-param-reassign
    acc[Manager.table] = new Manager(pool, Manager.table);
    return acc;
}, {});
// const handler = {
//   get(obj: any, prop: any) {
//     if (prop in obj) {
//       return obj[prop];
//     }
//     const pascalize = (string: string) =>
//       string.slice(0, 1).toUpperCase() + string.slice(1);
//     throw new ReferenceError(
//       `models.${prop} is not defined. Did you create ${pascalize(
//         prop
//       )}Manager.ts?`
//     );
//   },
// };
module.exports = new Proxy(models, handler);
