import express from "express";
import {
  createUser,
  getAllUsers,
  getMe,
  loginUser,
  resetPassword,
} from "./user.controllers.js";
import { protect } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.post("/reset-password", resetPassword);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

export default router;
