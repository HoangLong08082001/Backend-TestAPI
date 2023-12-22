import express from "express";
import billManagerController from "./billManagerController";
import { checkUserJWT, checkUserPermission } from "../../middleware/JwtAction";
const router = express.Router();
export default function billManagerRoute(app) {
  router.all("*", checkUserJWT, checkUserPermission);
  router.get("/get-hoadon", billManagerController.GetAll);
  router.get("/get-hoadonbyid/:id", billManagerController.ById);
  return app.use("/hoadon", router);
}
