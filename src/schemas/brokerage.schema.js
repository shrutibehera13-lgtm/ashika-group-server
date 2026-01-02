import mongoose from "mongoose";

const brokerCommissionSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    clientName: {
      type: String,
      required: true,
    },
    clientId: {
      type: String,
      required: true,
      unique: true,
    },
    normal: {
      type: Number,
      default: 0,
    },
    delivery: {
      type: Number,
      default: 0,
    },
    future: {
      type: Number,
      default: 0,
    },
    options: {
      type: Number,
      default: 0,
    },
    incentive: {
      type: Number,
      default: 0,
    },
    payable: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("BrokerCommission", brokerCommissionSchema);
