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
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.put("/", async (req, res) => {
  try {
    if (!req.body.loginID || !req.body.name) {
      return res.status(400).send({
        message: `Undefine loginID: ${req.body.loginID} / product: ${req.body.name}`,
      });
    }

    const account = await accountModel.findById(req.body.loginID);
    
    account.orders.forEach((order, index) => {
      if (order.name === req.body.name) account.orders[index].quantity++;
    });

    if (!account.orders.find((element) => element.name === req.body.name)) {
      account.orders.push({ name: req.body.name, quantity: 1 });
    }

    const updatedAccount = await accountModel.findByIdAndUpdate(
      req.body.loginID,
      account
    );
    return res.status(200).json(updatedAccount);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
