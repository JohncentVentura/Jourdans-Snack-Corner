import express from "express";
import { accountModel } from "../models/accountModel.js";
import { productModel } from "../models/productModel.js";
import { placeOrderModel } from "../models/placeOrderModel.js";
const router = express.Router();

//For Signing up
router.post("/register", async (req, res) => {
  await accountModel
    .create(req.body)
    .then((accounts) => res.status(201).json(accounts))
    .catch((error) => res.status(500).send(error));
});

//For Signing in
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    await accountModel.findOne({ email: email }).then((user) => {
      if (user) {
        if (user.password === password && user.isAdmin) {
          return res
            .status(200)
            .json({ loginStatus: "Login Admin", user: user });
        } else if (user.password === password && !user.isAdmin) {
          return res
            .status(200)
            .json({ loginStatus: "Login Customer", user: user });
        } else {
          return res.status(401).json({ loginStatus: "Incorrect Password" });
        }
      } else {
        return res.status(401).json({ loginStatus: "Invalid Email" });
      }
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ error: error.message });
  }
});

//For setting the account in Cart Page
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const account = await accountModel.findById(id);
    return res.status(200).json(account);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ error: error.message });
  }
});

//For changing quantity of an order in the cart, Cart.jsx handles disabling the button if a limit is reached
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const account = await accountModel.findById(id);
    const order = req.body.order;
    const product = await productModel.findById(order.id);
    const action = req.body.action;

    account.orders.forEach((accOrder, index) => {
      if (accOrder.name === order.name) {
        if (action === "add") {
          account.orders[index].quantity++;
          account.orders[index].priceTotal += order.price;
          account.orderTotal += order.price;
          product.quantity--;
        } else if (action === "subtract") {
          account.orders[index].quantity--;
          account.orders[index].priceTotal -= order.price;
          account.orderTotal -= order.price;
          product.quantity++;
        } else if (action === "delete") {
          account.orderTotal -= account.orders[index].priceTotal;
          product.quantity += account.orders[index].quantity;
          account.orders.splice(index, 1);
        }
      }
    });

    const updatedAccount = await accountModel.findByIdAndUpdate(id, account);
    const updatedProduct = await productModel.findByIdAndUpdate(
      product.id,
      product
    );
    return res.status(200).json(updatedAccount);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

//For placing order
router.post("/:id", async (req, res) => {
  try {
    if (!req.body.account) {
      return res.status(400).send({ message: "Invalid Account" });
    }

    const { id } = req.params;
    const account = await accountModel.findById(id);

    const placeOrder = await placeOrderModel.create({
      customerId: account.id,
      customerName: account.username,
      customerNumber: account.phoneNumber,
      customerAddress: account.address,
      orders: account.orders,
      orderTotal: account.orderTotal,
    });

    account.orders = [];
    account.orderTotal = 0;
    await accountModel.findByIdAndUpdate(id, account);

    return res.status(201).json(placeOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

export default router;
