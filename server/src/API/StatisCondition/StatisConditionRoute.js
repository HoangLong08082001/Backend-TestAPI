import express from "express";
import StatisConditionController from "./StatisConditionController";
const router = express.Router();
export default function StatisConditionRoute(app) {
  router.get("/doanhthu-thang", StatisConditionController.getDoanhThuMonth);
  router.get("/doanhthu-quy", StatisConditionController.getDoanhThuQuarter);
  router.get("/soluongtour-thang", StatisConditionController.getSoLuongMonth);
  router.get("/soluongtour-quy", StatisConditionController.getSoLuongQuarter);
  router.get("/soluong-chart", StatisConditionController.getSoLuongChart);
  router.get("/soluongkhach-thang", StatisConditionController.getKhachMonth);
  router.get("/soluongkhach-quy", StatisConditionController.getKhachQuarter);
  return app.use("/condition", router);
}
