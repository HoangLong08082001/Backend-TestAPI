import express from "express";
const router = express.Router();
import posotionController from "./positionController";
export default function positionRoute(app) {
  router.get("/list", posotionController.getAll);
  router.post("/add", posotionController.addPostion);
  router.delete("/delete/:id", posotionController.RemoveById);
  return app.use("/position", router);
}
