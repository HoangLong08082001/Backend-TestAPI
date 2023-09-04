import createPool, { createConnection } from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const connection = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "TRAVEL_DATABASE",
});

connection.connect((err) => {
  if (err) {
    console.log("FAILS");
    throw err;
  } else {
    console.log("SUCCESS");
  }
});
module.exports = connection;
