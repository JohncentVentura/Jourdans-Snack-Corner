import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js"

const { PORT, MONGODBURI } = process.env;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/products", productRoutes);

//Checks port & status, status code 234 means the response to the AUTH command when the requested security mechanism is accepted and negotiation of the secured connection can begin
app.listen(PORT, () => console.log(`App listening to port ${PORT}`));
app.get("/", (req, res) => res.status(234).send("Jourdan's Snack Corner Status: 234"));

mongoose
  .connect(MONGODBURI)
  .then(() => console.log("App connected to database"))
  .catch((error) => console.log(error));