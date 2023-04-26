const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.STICKERS_SHOP_DB_HOST,
  port: process.env.STICKERS_SHOP_DB_PORT,
  user: process.env.STICKERS_SHOP_DB_USER,
  password: process.env.STICKERS_SHOP_DB_PASSWORD,
  database: process.env.STICKERS_SHOP_DB_NAME,
});

connection
  .getConnection()
  .then(() => {
    console.log('database is connected');
  })
  .catch((err: any) => {
    console.error(err);
  });

// module.exports = connection;
export default connection;
// import dotenv from 'dotenv';
// import mysql from 'mysql2/promise';

// dotenv.config();

// const connection = mysql.createPool({
//   host: process.env.STICKERS_SHOP_DB_HOST,
//   port: process.env.STICKERS_SHOP_DB_PORT,
//   user: process.env.STICKERS_SHOP_DB_USER,
//   password: process.env.STICKERS_SHOP_DB_PASSWORD,
//   database: process.env.STICKERS_SHOP_DB_NAME,
// });

// export default connection;
