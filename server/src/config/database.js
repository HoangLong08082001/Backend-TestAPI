const { createPool } = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
const pool = createPool({
  port: process.env.DB_PORT,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.MYSQL_DB,
  connectionLimit: 10,
});

module.exports = pool;
