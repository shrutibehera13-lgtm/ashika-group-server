import express from "express";
import userRoutes from "../modules/user/user.routes.js";
import { globalErrorHandler } from "../lib/errors.js";
import mutualFundRoutes from "../modules/mutualFund/mutualFund.routes.js";
import brokerCommissionRoutes from "../modules/brokerCommission/brokerCommission.routes.js";
import portfolioRoutes from "../modules/portfolio/portfolio.routes.js";
import revenueRoutes from "../modules/revenue/revenue.routes.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

router.use("/users", userRoutes);
router.use("/mutual-funds", mutualFundRoutes);
router.use("/broker-commissions", brokerCommissionRoutes);
router.use("/portfolios", portfolioRoutes);
router.use("/revenue", revenueRoutes);

router.use(globalErrorHandler);

export default router;
