import express from "express";
import { accountModel } from "../models/accountModel.js";
const router = express.Router();

//For Signing up
router.post("/register", async (req, res) => {
  await accountModel
    .create(req.body)
    .then((accounts) => res.status(201).json(accounts))
    .catch((error) => res.status(500).json(error));
});

//For Signing in
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    await accountModel.findOne({ email: email }).then((user) => {
      if (user) {
        if (user.password === password && user.isAdmin) {
          res.status(200).json({ loginStatus: "Login Admin", user: user });
        } else if (user.password === password && !user.isAdmin) {
          res.status(200).json({ loginStatus: "Login Customer", user: user });
        } else {
          res.status(200).json({ loginStatus: "Incorrect Password" });
        }
      } else {
        res.status(200).json({ loginStatus: "Invalid Email" });
      }
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const account = await accountModel.findById(id);
    return res.status(200).json(account);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ error: error.message });
  }
});

export default router;
