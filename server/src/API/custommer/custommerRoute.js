import customerController from "./custommerController";
import express from "express";
const router = express.Router();

export default function custommerRoute(app) {
  router.get("/list", customerController.getAll);
  router.post("/add", customerController.addCustommer);
  router.delete("/delete/:id", customerController.RemoveById);
  return app.use("/custommer", router);
}
