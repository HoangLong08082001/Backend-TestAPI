import express from "express";
import posotionController from "./positionController";
import { checkUserJWT, checkUserPermission } from "../../middleware/JwtAction";
const router = express.Router();
export default function positionRoute(app) {
  router.all("*", checkUserJWT, checkUserPermission);
  router.get("/list-postion", posotionController.getAll);
  router.post("/add", posotionController.addPostion);
  router.delete("/delete/:id", posotionController.RemoveById);
  return app.use("/position", router);
}
