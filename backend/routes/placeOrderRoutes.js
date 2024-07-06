import express from "express";
import { placeOrderModel } from "../models/placeOrderModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const placeOrder = await placeOrderModel.find({});
    return res.status(200).json({
      count: placeOrder.length,
      placeOrders: placeOrder,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
