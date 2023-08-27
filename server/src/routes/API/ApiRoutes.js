import express from "express";
import ApiController from "../../controller/API/ApiController";
const router = express.Router();

export default function ApiRoutes(app) {
  router.get("/", ApiController.HelloWorld);
  return app.use("/", router);
}
