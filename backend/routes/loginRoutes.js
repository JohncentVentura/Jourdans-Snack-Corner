import express from "express";
import { accountModel } from "../models/accountModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const account = await accountModel.findOne(data, (err, data) => {
      if (err) return console.log(err);
      done(null, data);
    });
    return res.status(200).json({
      data: account,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

export default router;
