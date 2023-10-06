import express from "express";
import { checkUserJWT, checkUserPermission } from "../../middleware/JwtAction";
import loginController from "../login/loginController";
const router = express.Router();
export default function loginRoutes(app) {
  router.all("*", checkUserJWT, checkUserPermission);
  router.post("/login", loginController.LoginEmployee);
  router.post("/logout", loginController.LogoutEmployee);

  return app.use("/api", router);
}
