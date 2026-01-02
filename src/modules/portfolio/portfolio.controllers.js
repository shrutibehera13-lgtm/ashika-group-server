import {
  createPortfolioService,
  getAllPortfoliosService,
} from "./portfolio.services.js";

export const createPortfolio = async (req, res, next) => {
  try {
    const portfolio = await createPortfolioService(req.body);

    res.status(201).json({
      message: "Portfolio created successfully",
      data: portfolio,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllPortfolios = async (req, res, next) => {
  try {
    const data = await getAllPortfoliosService();

    res.status(200).json({
      message: "Portfolio list fetched successfully",
      count: data.length,
      data,
    });
  } catch (error) {
    next(error);
  }
};
