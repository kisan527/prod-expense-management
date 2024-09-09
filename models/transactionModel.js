import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: [true, "Amount is a required field"],
    },
    type: {
      type: String,
      required: [true, "Type is a required field"],
    },
    category: {
      type: String,
      required: [true, "Category is a required field"],
    },
    reference: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Description is a required field"],
    },
    date: {
      type: Date,
      required: [true, "Date is a required field"],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("transactions", transactionSchema);

export default transactionModel;
