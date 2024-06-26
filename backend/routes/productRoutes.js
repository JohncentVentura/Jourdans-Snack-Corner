import express from "express";
import { productModel } from "../models/productModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await productModel.find({});
    return res.status(200).json({
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    if (!req.body.name || !req.body.price || !req.body.quantity) {
      return res.status(400).send({ message: "Send all required fields" });
    }

    const newProduct = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
    };

    const product = await productModel.create(newProduct);
    return res.status(201).send(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);
    return res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (!req.body.name || !req.body.price || !req.body.quantity) {
      return res.status(400).send({ message: "Send all required fields" });
    }

    const { id } = req.params;
    const product = await productModel.findByIdAndUpdate(id, req.body);
    if (!product) return res.status(404).json({ message: "Product not found" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findByIdAndDelete(id);

    if (!product) return res.status(404).json({ message: "Product not found" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
