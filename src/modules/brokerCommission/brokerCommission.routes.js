import express from "express";
import {
  createBrokerCommission,
  getAllBrokerCommissions,
} from "./brokerCommission.controllers.js";

const router = express.Router();

router.post("/", createBrokerCommission);
router.get("/", getAllBrokerCommissions);

export default router;
