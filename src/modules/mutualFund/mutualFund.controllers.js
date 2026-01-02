import {
  createMutualFundService,
  getAllMutualFundsService,
} from "./mutualFund.services.js";

export const createMutualFund = async (req, res, next) => {
  try {
    const result = await createMutualFundService(req.body);

    res.status(201).json({
      message: "Mutual fund data saved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllMutualFunds = async (req, res, next) => {
  try {
    const data = await getAllMutualFundsService();

    res.status(200).json({
      message: "Mutual fund list fetched successfully",
      count: data.length,
      data,
    });
  } catch (error) {
    next(error);
  }
};
