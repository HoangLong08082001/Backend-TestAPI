import express from "express";
const router = express.Router();
import tourController from "./tourController";
export default function tourRoutes(app) {
  router.get("/alltour", tourController.gettourall);
  router.get("/alltour/:id", tourController.gettourfollowid);
  router.get("/alltour/list/:id", tourController.gettourfollowidlist);
  router.post("/alltour/gettourbill", tourController.Gettourbill);
  router.post("/search", tourController.searchtourdata);
  router.get("/tourhere/:noiden", tourController.gettourhere);
  router.post("/addtourlove", tourController.addlovetour);
  router.post("/gettourlove", tourController.Gettourlove);
  router.get("/get-tour-by-voucher", tourController.GetByVoucher);
  router.get("/get-tour-withday", tourController.getTourWithDay);
  router.get("/gettour-with-giamgia", tourController.getTourWithGiamGia);
  return app.use("/tour", router);
}
