import express from "express";
import billManagerController from "./billManagerController";
const router = express.Router();
export default function billManagerRoute(app) {
  router.get("/get-hoadon", billManagerController.GetAll);
  router.get('/get-hoadonbyid/:id', billManagerController.ById);
  return app.use("/hoadon", router);
}
