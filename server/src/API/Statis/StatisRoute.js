import express from "express";
import StatisControler from "./StatisController";
import { checkUserJWT, checkUserPermission } from "../../middleware/JwtAction";
const router = express.Router();
export default function StatisRoute(app) {
  router.all("*", checkUserJWT, checkUserPermission);
  router.get("/statis-doanhthu", StatisControler.getDoanhThu);
  router.get("/statis-khachhang", StatisControler.getKhachHang);
  router.get("/statis-soluongtour", StatisControler.getSoluongTour);
  router.get("/statis-giamgia", StatisControler.getGiamGia);
  return app.use("/statistical", router);
}
