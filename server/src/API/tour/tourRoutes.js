

import express from "express";
const router = express.Router();
import tourController from "./tourController";
export default function tourRoutes(app) {
  router.get("/alltour", tourController.gettourall);
  router.get("/alltour/:id", tourController.gettourfollowid);
  router.post("/search", tourController.searchtourdata);
  router.post("/addtourlove", tourController.addlovetour);
  router.post("/gettourlove", tourController.Gettourlove);
  return app.use("/tour", router);
}
