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
import StatisConditionRoute from "./API/StatisCondition/StatisConditionRoute";
const http = require("http");
const cors = require("cors");

dotenv.config();
const port = process.env.PORT;
const app = express();
const payment = require("./API/payment/paymentrouter");
const socketIO = require("socket.io");
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "http://dattourtravel.com:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

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
StatisConditionRoute(app);
app.use("/payment", payment);
io.on("connection", (socket) => {
  socket.on("newOrder", (orderData) => {
    // Xử lý dữ liệu đơn hàng ở đây (ví dụ: lưu vào database, xử lý logic, ...)
    // Sau khi xử lý, gửi thông báo đến admin về đơn hàng mới
    console.log(orderData);
    io.emit("orderNotification", orderData);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
server.listen(port, () => {
  console.log("Website is running on the port", port);
});
