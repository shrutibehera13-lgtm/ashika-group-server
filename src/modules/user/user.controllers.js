import { AppError } from "../../lib/errors.js";
import userSchema from "../../schemas/user.schema.js";
import {
  createUserService,
  loginUserService,
  resetPasswordService,
} from "./user.services.js";

export const createUser = async (req, res, next) => {
  try {
    const user = await createUserService(req.body);

    res.status(201).json({
      message: "User created successfully",
      data: {
        id: user._id,
        firstName: user.firstName,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = (req, res, next) => {
  try {
    throw new AppError("Not implemented", 501);
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      throw new AppError("Email and new password are required", 400);
    }
    const user = await resetPasswordService(email, newPassword);
    res.status(200).json({
      message: "Password updated successfully",
      data: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new AppError("Email and password are required", 400);
    }

    const user = await loginUserService(email, password);
    res.status(200).json({
      message: "Login successful",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const getMe = async (req, res, next) => {
  try {
    const user = await userSchema.findById(req.user.id).select("-password");

    res.status(200).json({
      data: user,
    });
  } catch (err) {
    next(err);
  }
};
