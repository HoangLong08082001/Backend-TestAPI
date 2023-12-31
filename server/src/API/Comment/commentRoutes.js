import express from "express";
const router = express.Router();
import commentController from "./commentController";
export default function tourRoutes(app) {
  router.post("/addcomment", commentController.Addcomments);
  router.post("/getcomment", commentController.Getcomments);
  router.get("/get5star", commentController.Getcomments5star);
  return app.use("/tour", router);
}
