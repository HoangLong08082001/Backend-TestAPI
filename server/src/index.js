import express from "express";
import dotenv from "dotenv";
import employeeRoutes from "./API/employee/employeeRoutes";
import positionRoute from "./API/position/positionRoute";
import custommerRoute from "./API/custommer/custommerRoute";
import connection from "./config/database";
const cors = require("cors");
dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", process.env.PORT_VIEWS);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

employeeRoutes(app);
positionRoute(app);
custommerRoute(app);

app.listen(port, () => {
  console.log("Website is running on the port", port);
});
