import express from "express";
import {
  createUser,
  getAllUsers,
  loginUser,
  resetPassword,
} from "./user.controllers.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.post("/reset-password", resetPassword);
router.post("/login", loginUser);

export default router;
