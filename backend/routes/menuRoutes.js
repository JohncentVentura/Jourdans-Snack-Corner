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

//For adding product to cart, product(s) in cart are called order(s)
router.put("/", async (req, res) => {
  try {
    const account = await accountModel.findById(req.body.loginID);
    const product = await productModel.findById(req.body.product._id)

    account.orders.forEach((order, index) => {
      if (order.name === product.name) {
        account.orders[index].quantity++;
        account.orders[index].priceTotal += product.price;

        product.quantity--;
      }
    });

    if (!account.orders.find((element) => element.name === product.name)) {
      account.orders.push({
        id: product.id,
        type: product.type,
        name: product.name,
        quantity: 1,
        price: product.price,
        priceTotal: product.price
      });

      product.quantity--;
    }

    account.orderTotal = 0;
    account.orders.forEach((order, index) => {
      account.orderTotal += order.priceTotal;
    });

    const updatedAccount = await accountModel.findByIdAndUpdate(
      req.body.loginID,
      account
    );

    const updatedProduct = await productModel.findByIdAndUpdate(
      req.body.product._id,
      product
    );
    return res.status(200).json({updatedAccount, updatedProduct});
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
