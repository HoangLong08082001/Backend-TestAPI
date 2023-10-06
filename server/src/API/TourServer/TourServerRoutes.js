import express from "express";
import TourServerController from "./TourServerController";
import multer from "multer";
import pool from "../../config/database";
import path from "path";
const router = express.Router();
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    pool(null, "public/images");
  },
  filename: (req, file, cb) => {
    pool(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
}); //Middleware xu ly upload file
export default function TourServerRoutes(app) {
  router.post(
    "/add-tour",
    upload.single("image"),
    TourServerController.addTour
  );
  return app.use("/tourserver", router);
}
