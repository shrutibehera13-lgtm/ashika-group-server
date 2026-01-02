import express from "express";
import {
  createMutualFund,
  getAllMutualFunds,
} from "./mutualFund.controllers.js";

const router = express.Router();

router.post("/", createMutualFund);
router.get("/", getAllMutualFunds);

export default router;
