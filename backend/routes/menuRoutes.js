import express from "express";
import { accountModel } from "../models/accountModel.js ";
import { productModel } from "../models/productModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await productModel.find({});
    return res.status(200).json({
      count: products.length,
      products: products,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export default router;
