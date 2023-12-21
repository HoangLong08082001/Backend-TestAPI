import express from "express";
import StatisControler from "./StatisController";

const router = express.Router();
export default function StatisRoute(app) {
  router.get("/thongke-doanh-thu", StatisControler.getDoanhThu);
  router.get("/thongke-khach-hang", StatisControler.getKhachHang);
  router.get("/thongke-soluong-tour", StatisControler.getSoluongTour);
  router.get("/thongke-giam-gia", StatisControler.getGiamGia);
  return app.use("/statistical", router);
}
