const { createPool } = require("mysql");
const dotenv = require("dotenv");
const pool = createPool({
  port: process.env.DB_PORT,
  host: process.env.POST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.MYSQL_DB || "travel-ui",
  connectionLimit: 10,
});

module.exports = pool;
