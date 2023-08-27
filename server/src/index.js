import express from "express";
import dotenv from "dotenv";
import ApiRoutes from "./routes/API/ApiRoutes";
dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

ApiRoutes(app);

app.listen(port, () => {
  console.log("Website is running on the port", port);
});
