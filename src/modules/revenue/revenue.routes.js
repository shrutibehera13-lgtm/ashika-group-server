import express from "express";
import { createRevenue, getAllRevenue } from "./revenue.controllers.js";

const router = express.Router();

router.post("/", createRevenue);
router.get("/", getAllRevenue);

export default router;
