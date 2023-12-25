import express from "express";
import TourServerController from "./TourServerController";
import { checkUserJWT, checkUserPermission } from "../../middleware/JwtAction";
const router = express.Router();

export default function TourServerRoutes(app) {
  router.get("/statusphieutour", TourServerController.GETPHIEUTOUR);
  router.all("*", checkUserJWT, checkUserPermission);
  router.get("/getall-tour", TourServerController.getAll);
  router.post("/add-tour", TourServerController.addTour);
  router.delete("/delete-tour", TourServerController.removeById);
  router.put("/update-tour", TourServerController.updateById);
  return app.use("/tourserver", router);
}
