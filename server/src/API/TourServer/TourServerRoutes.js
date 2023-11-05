import express from "express";
import TourServerController from "./TourServerController";
const router = express.Router();

export default function TourServerRoutes(app) {
  router.get("/getall-tour", TourServerController.getAll);
  router.post("/add-tour", TourServerController.addTour);
  router.delete("/delete-tour", TourServerController.removeById);
  router.put("/update-tour", TourServerController.updateById);
  return app.use("/tourserver", router);
}
