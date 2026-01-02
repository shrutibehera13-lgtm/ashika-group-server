import express from "express";
import { createPortfolio, getAllPortfolios } from "./portfolio.controllers.js";

const router = express.Router();

router.post("/", createPortfolio);
router.get("/", getAllPortfolios);

export default router;
