import express from "express";
import employeeController from "./employeeController";
const router = express.Router();
export default function employeeRoutes(app) {
  router.get("/list", employeeController.getAll);
  router.post("/add", employeeController.addEmployee);
  router.delete("/delete/:id", employeeController.removeByID);
  return app.use("/employees", router);
}
