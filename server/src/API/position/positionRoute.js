import express from "express";
import positionController from "./positionController";
import { checkUserJWT, checkUserPermission } from "../../middleware/JwtAction";
const router = express.Router();
export default function positionRoute(app) {
  router.all("*", checkUserJWT, checkUserPermission);
  router.get("/list-position", positionController.getAll);
  router.get("/getpositionbyid/:id", positionController.getById);
  router.post("/add-position", positionController.addPostion);
  router.delete("/delete/:id", positionController.RemoveById);
  return app.use("/position", router);
}
