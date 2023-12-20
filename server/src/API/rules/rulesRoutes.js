import rulesControllers from "./rulesControllers";
import { checkUserJWT, checkUserPermission } from "../../middleware/JwtAction";
import express from "express";
const router = express.Router();
export default function rulesRoutes(app) {
  router.all("*", checkUserJWT, checkUserPermission);
  router.get("/get-rules", rulesControllers.getAll);
  router.post('/assign',rulesControllers.Assign);
  router.post('/add-rule',rulesControllers.AddNew);
  return app.use("/rule", router);
}
