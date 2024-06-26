import express from "express";
import { accountModel } from "../models/accountModel.js";
const router = express.Router();

//For Signing in
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  await accountModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password && user.isAdmin) {
        res.json("Login Admin");
      } else if (user.password === password && !user.isAdmin) {
        res.json("Login Customer");
      } else {
        res.json("Incorrect Password");
      }
    } else {
      res.json("Invalid Email");
    }
  });
});

//For Signing up
router.post("/register", async (req, res) => {
  await accountModel
    .create(req.body)
    .then((accounts) => res.status(201).json(accounts))
    .catch((error) => res.status(500).json(error));
});

//???
router.get("/cart/:id", async (req, res)=>{
  const { id } = req.params;
  await accountModel.findById(id)
})

export default router;
