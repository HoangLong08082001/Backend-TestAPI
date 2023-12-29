import express from "express";
const router = express.Router();
import tourController from "./tourController";
export default function tourRoutes(app) {
  router.get("/alltour", tourController.gettourall);
  router.get("/alltour2", tourController.gettourall2);
  router.get("/alltour/:id", tourController.gettourfollowid);
  router.get("/alltour/list/:id", tourController.gettourfollowidlist);
  router.post("/alltour/gettourbill", tourController.Gettourbill);
  router.post("/search", tourController.searchtourdata);
  router.post("/tourhere", tourController.gettourhere);
  router.post("/tourbook", tourController.Gettourbooksuccess);
  router.post("/addtourlove", tourController.addlovetour);
  router.post("/gettourlove", tourController.Gettourlove);
  router.get("/get-tour-by-voucher", tourController.GetByVoucher);
  router.get("/get-tour-withday", tourController.getTourWithDay);
  router.get("/gettour-with-giamgia", tourController.getTourWithGiamGia);
  router.get("/get-more-voucher", tourController.getMoreController);
  router.get("/get-soluonghoadon", tourController.getSoLuongHoaDon);
  router.get("/get-khachdangky", tourController.getKhachDangKy);
  router.get("/get-soluongtour", tourController.getSoLuongTour);
  router.get("/get-phieuchuaduyet", tourController.getPhieuChuaDuyet);
  router.get("/get-giamgia", tourController.getGiamGia);
  return app.use("/tour", router);
}
