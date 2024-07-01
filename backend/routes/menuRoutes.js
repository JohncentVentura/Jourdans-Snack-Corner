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

router.put("/", async (req, res) => {
  try {
    if (!req.body.loginID || !req.body.product) {
      return res.status(400).send({
        message: `loginID: ${req.body.loginID} / product: ${req.body.product}`,
      });
    }

    const account = await accountModel.findById(req.body.loginID);
    const product = req.body.product;

    account.orders.forEach((order, index) => {
      if (order.name === product.name) {
        account.orders[index].quantity++;
        account.orders[index].price += product.price;
      }
    });

    if (!account.orders.find((element) => element.name === product.name)) {
      account.orders.push({
        type: product.type,
        name: product.name,
        quantity: 1,
        price: product.price,
      });
    }

    account.orderTotal = 0;
    account.orders.forEach((order, index) => {
      account.orderTotal += order.price;
    });

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
