import customerController from "./custommerController";
import { checkUserJWT, checkUserPermission } from "../../middleware/JwtAction";
import express from "express";
const router = express.Router();

export default function custommerRoute(app) {
  router.all("*", checkUserJWT, checkUserPermission);
  router.get("/list-customer", customerController.getAll);
  router.post("/register-custommer", customerController.addCustommer);
  router.delete("/delete-custommer", customerController.RemoveById);
  router.get("/count", customerController.countCustommer);
  return app.use("/custommer", router);
}
