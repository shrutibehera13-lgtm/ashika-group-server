import Portfolio from "../../schemas/portfolio.schema.js";
import { AppError } from "../../lib/errors.js";

export const createPortfolioService = async (data) => {
  const { name, assetType, initialPrice, currentPrice } = data;

  if (!name || !assetType || initialPrice == null || currentPrice == null) {
    throw new AppError("Required fields missing", 400);
  }

  return await Portfolio.create(data);
};

export const getAllPortfoliosService = async () => {
  return await Portfolio.find().sort({ createdAt: -1 });
};
