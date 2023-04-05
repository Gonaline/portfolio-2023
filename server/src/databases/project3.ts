const mysql = require('mysql2/promise');

const database = mysql.createPool({
  host: process.env.STICKERS_SHOP_DB_HOST,
  port: process.env.STICKERS_SHOP_DB_PORT,
  user: process.env.STICKERS_SHOP_DB_USER,
  password: process.env.STICKERS_SHOP_DB_PASSWORD,
  database: process.env.STICKERS_SHOP_DB_NAME,
});

database
  .getConnection()
  .then(() => {
    console.log('database is connected');
  })
  .catch((err: any) => {
    console.error(err);
  });

module.exports = database;
