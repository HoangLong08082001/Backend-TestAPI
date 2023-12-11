import express from "express";
import employeeController from "./Billcontroller";
const router = express.Router();
export default function employeeRoutes(app) {

  router.post("/addbill", employeeController.billadd);
  router.post("/getbill", employeeController.Getphieu);
  return app.use("/Bill", router);
}