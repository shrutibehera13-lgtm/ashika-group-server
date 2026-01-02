import MutualFund from "../../schemas/mutualFund.schema.js";
import { AppError } from "../../lib/errors.js";

export const createMutualFundService = async (data) => {
  if (!data || (Array.isArray(data) && data.length === 0)) {
    throw new AppError("No data provided", 400);
  }
  if (Array.isArray(data)) {
    return await MutualFund.insertMany(data);
  }
  return await MutualFund.create(data);
};

export const getAllMutualFundsService = async () => {
  return await MutualFund.find().sort({ date: 1 });
};
