import mongoose from "mongoose";

const revenueSchema = new mongoose.Schema(
  {
    metadata: {
      totalRevenue: { type: Number, default: 0 },
      commissions: { type: Number, default: 0 },
      brokerageFees: { type: Number, default: 0 },
      otherSources: { type: Number, default: 0 },
    },
    data: [
      {
        source: {
          type: String,
          enum: ["Commissions", "Brokerage Fees", "Other"],
          required: true,
        },
        amount: { type: Number, required: true },
        date: { type: Date, default: Date.now },
        description: { type: String, trim: true },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Revenue", revenueSchema);
