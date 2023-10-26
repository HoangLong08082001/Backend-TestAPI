import express from "express";
import loginController from "../Login-client/ClientController";
const router = express.Router();
export default function loginRoutes(app) {
  router.post("/login-client", loginController.LoginClient);
  router.post("/logout-client", loginController.LogoutClient);
  return app.use("/api", router);
}