import express from "express";
import dotenv from "dotenv";
var cors = require('cors')
dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(cors())
const tourRoutes=require('./API/tour/tourRoutes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/",tourRoutes);

app.listen(port, () => {
  console.log("Website is running on the port", port);
});
