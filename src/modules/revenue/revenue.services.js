import Revenue from "../../schemas/revenue.schema.js";
import { AppError } from "../../lib/errors.js";

export const createRevenueService = async (revenueData) => {
  if (!revenueData || !revenueData.metadata || !revenueData.data) {
    throw new AppError("Invalid revenue data", 400);
  }

  return await Revenue.create(revenueData);
};

export const getAllRevenueService = async () => {
  return await Revenue.find().sort({ createdAt: -1 });
};
