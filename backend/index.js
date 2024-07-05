import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import accountRoutes from "./routes/accountRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";

const { PORT, MONGODBURI } = process.env;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/account", accountRoutes);
app.use("/products", productRoutes);
app.use("/menu", menuRoutes);

//Checks port & status, status code 234 means the response to the AUTH command when the requested security mechanism is accepted and negotiation of the secured connection can begin
app.listen(PORT, () => console.log(`App listening to port ${PORT}`));
app.get("/", (req, res) =>
  res.status(234).send("Jourdan's Snack Corner Server is now online")
);

mongoose
  .connect(MONGODBURI)
  .then(() => console.log("App connected to database"))
  .catch((error) => console.log(error));