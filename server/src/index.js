import express from "express";
import dotenv from "dotenv";
const path = require("path");
import fileUpload from "express-fileupload";
import clientRouter from "./API/Login-client/ClientRoute";
import employeeRoutes from "./API/employee/employeeRoutes";
import positionRoute from "./API/position/positionRoute";
import custommerRoute from "./API/custommer/custommerRoute";
import commentRoute from "./API/Comment/commentRoutes";
import tourRoutes from "./API/tour/tourRoutes";
import bodyParser from "body-parser";
import billrouter from "./API/Bill/Billrouter";
import cookieParser from "cookie-parser";
import { createJwt, verifyToken } from "./middleware/JwtAction";
import pool from "./config/database";
import TourServerRoutes from "./API/TourServer/TourServerRoutes";
import loginRoutes from "./API/login/loginRoutes";
import TicketRoute from "./API/Ticket/TicketRoute";
import voucherRoutes from "./API/voucher/voucherRoutes";
import rulesRoutes from "./API/rules/rulesRoutes";
import StatisRoute from "./API/Statis/StatisRoute";
import billManagerRoute from "./API/billManager/billManagerRoute";
const cors = require("cors");
dotenv.config();
const port = process.env.PORT;
const app = express();
const payment = require("./API/payment/paymentrouter");
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  cors({
    origin: [process.env.PORT_VIEWS],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
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
commentRoute(app);
tourRoutes(app);
loginRoutes(app);
TourServerRoutes(app);
TicketRoute(app);
billrouter(app);
voucherRoutes(app);
rulesRoutes(app);
StatisRoute(app);
billManagerRoute(app);
app.use("/payment", payment);

app.listen(port, () => {
  console.log("Website is running on the port", port);
});
