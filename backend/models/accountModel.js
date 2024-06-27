import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    isAdmin: {
      type: Boolean,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    orders: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const accountModel = mongoose.model("Accounts", accountSchema);