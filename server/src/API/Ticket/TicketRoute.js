import express from "express";
import TicketController from "./TicketController";
import { checkUserJWT, checkUserPermission } from "../../middleware/JwtAction";
const router = express.Router();

export default function TicketRoute(app) {
  router.all("*", checkUserJWT, checkUserPermission);
  router.get("/getall-ticket", TicketController.GetTicket);
  router.post("/add-ticket", TicketController.AddTicket);
  router.put("/update-status-ticket", TicketController.UpdateState);
  return app.use("/ticket", router);
}
