import express from "express";
import { accountModel } from "../models/accountModel.js";
import { productModel } from "../models/productModel.js";
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
        if (user.password === password) {
          return res
            .status(200)
            .json({ loginStatus: "Login Admin", user: user });
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

export default router;
