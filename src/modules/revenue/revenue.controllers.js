import {
  createRevenueService,
  getAllRevenueService,
} from "./revenue.services.js";

export const createRevenue = async (req, res, next) => {
  try {
    const revenue = await createRevenueService(req.body);

    res.status(201).json({
      message: "Revenue created successfully",
      data: revenue,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllRevenue = async (req, res, next) => {
  try {
    const data = await getAllRevenueService();

    res.status(200).json({
      message: "Revenue list fetched successfully",
      count: data.length,
      data,
    });
  } catch (error) {
    next(error);
  }
};
