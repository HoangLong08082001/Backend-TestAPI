import customerController from "./custommerController";
import { checkUserJWT, checkUserPermission } from "../../middleware/JwtAction";
import express from "express";
const router = express.Router();

export default function custommerRoute(app) {
  router.post("/add-custommer", customerController.AddNew);
  router.post("/getDK", customerController.getDK);
  router.post("/register-custommer/finduser", customerController.FindUser);
  router.post(
    "/register-custommer-google",
    customerController.addCustommergoogle
  );
  router.all("*", checkUserJWT, checkUserPermission);
  router.get("/list-customer", customerController.getAll);
  router.post("/register-custommer", customerController.addCustommer);

  router.delete("/delete-custommer", customerController.RemoveById);
  router.get("/count", customerController.countCustommer);
  return app.use("/custommer", router);
}
