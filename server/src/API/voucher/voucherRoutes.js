import express from "express";
import voucherController from "./voucherController";
import { checkUserJWT, checkUserPermission } from "../../middleware/JwtAction";
const router = express.Router();
export default function voucherRoutes(app) {
  router.get('/lastest-day', voucherController.getLatest);
  router.all("*", checkUserJWT, checkUserPermission);
  router.post("/add-voucher", voucherController.addVoucher);
  router.post("/add-more-voucher", voucherController.addMoreVoucher);
  router.get("/get-more-voucher", voucherController.getMoreVoucher);
  router.get("/get-voucher", voucherController.getVoucher);
  router.get('/get-again', voucherController.getMoreVoucherAgain);
  return app.use("/voucher", router);
}
