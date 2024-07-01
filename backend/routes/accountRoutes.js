import express from "express";
import { accountModel } from "../models/accountModel.js";
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

//For increasing quantity of an item in the cart
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const account = await accountModel.findById(id);
    const action = req.body.action;
    const product = req.body.product;

    if (action === "add") {

    } else if (action === "subtract") {

    } else if (action === "delete") {

    }

    const updatedAccount = await accountModel.findByIdAndUpdate(id);
    return res.status(200).json(updatedAccount);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

export default router;
