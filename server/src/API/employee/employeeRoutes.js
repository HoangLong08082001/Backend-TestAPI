import express from "express";
import employeeController from "./employeeController";
import { checkUserJWT, checkUserPermission } from "../../middleware/JwtAction";

const router = express.Router();
export default function employeeRoutes(app) {
  router.all("*", checkUserJWT, checkUserPermission);
  router.get("/account", employeeController.getUserAccount);
  router.get("/list", employeeController.getAll);
  router.post("/add", employeeController.addEmployee);
  router.delete("/delete/:id", employeeController.removeByID);
  router.get("/GetById/:id", employeeController.getById);
  router.put("/update/:id", employeeController.UpdateEmployee);
  router.get("/count", employeeController.countEmployee);
  return app.use("/employees", router);
}
