import mongoose from "mongoose";

const mutualFundSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    document: {
      type: String,
      required: true,
    },
    particular: {
      type: String,
      required: true,
    },
    debit: {
      type: Number,
      required: true,
      default: 0,
    },
    credit: {
      type: Number,
      required: true,
      default: 0,
    },
    balance: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("MutualFund", mutualFundSchema);
