import mongoose from "mongoose";

const placeOrderSchema = new mongoose.Schema(
  {
    customerId: {
      type: String,
      required: true,
    },
    orders: {
      type: Array,
      required: true,
    },
    orderTotal: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const placeOrderModel = mongoose.model("PlaceOrder", placeOrderSchema);
