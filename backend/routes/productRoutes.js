import express from "express";
import { productModel } from "../models/productModel.js";
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    if (
      !req.body.type ||
      !req.body.name ||
      !req.body.price ||
      !req.body.quantity
    ) {
      return res.status(400).send({ message: "Send all required fields" });
    }

    const product = await productModel.create({
      type: req.body.type,
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
    });
    return res.status(201).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

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

router.get("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);
    return res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    if (
      !req.body.type ||
      !req.body.name ||
      !req.body.price ||
      !req.body.quantity
    ) {
      return res.status(400).send({ message: "Send all required fields" });
    }

    const { id } = req.params;
    const product = await productModel.findByIdAndUpdate(id, req.body);

    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findByIdAndDelete(id);

    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;

/*
router.get("/read/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);
    return res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
*/
