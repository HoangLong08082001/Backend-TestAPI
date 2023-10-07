// const {
//   gettourall,
//   gettourfollowid,
//   searchtourdata,
// } = require("./tourController");
// const router = require("express").Router();
// router.get("/alltour", gettourall);
// router.get("/alltour/:id", gettourfollowid);
// router.post("/search", searchtourdata);

// module.exports = tourRoutes;

import express from "express";
const router = express.Router();
import tourController from "./tourController";
export default function tourRoutes(app) {
  router.get("/alltour", tourController.gettourall);
  router.get("/alltour/:id", tourController.gettourfollowid);
  router.post("/search", tourController.searchtourdata);
  return app.use("/tour", router);
}
