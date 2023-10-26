import express from "express";
import dotenv from "dotenv";
import clientRouter from "./API/Login-client/ClientRoute";
import employeeRoutes from "./API/employee/employeeRoutes";
import positionRoute from "./API/position/positionRoute";
import custommerRoute from "./API/custommer/custommerRoute";
import tourRoutes from "./API/tour/tourRoutes";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { createJwt, verifyToken } from "./middleware/JwtAction";
import pool from "./config/database";
import TourServerRoutes from "./API/TourServer/TourServerRoutes";
import loginRoutes from "./API/login/loginRoutes";
const cors = require("cors");
dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.PORT_VIEWS],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, OPTIONS, POST, PUT, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "x-requested-with,content-type, Authorization"
  );
  res.setHeader("Cache-Control", "no-cache");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});
clientRouter(app);
employeeRoutes(app);
positionRoute(app);
custommerRoute(app);
tourRoutes(app);
loginRoutes(app);
TourServerRoutes(app);
app.listen(port, () => {
  console.log("Website is running on the port", port);
});
