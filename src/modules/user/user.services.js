import User from "../../schemas/user.schema.js";
import { AppError } from "../../lib/errors.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../../lib/jwt.js";

export const createUserService = async (userData) => {
  const { firstName, lastName, email, password, phone } = userData;
  if (!firstName || !email || !password) {
    throw new AppError("Required fields missing", 400);
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new AppError("User already exists", 409);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    phone,
  });
  console.log("User saved:", user);
  return user;
};

export const resetPasswordService = async (email, newPassword) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError("User not found", 404);
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  user.updatedAt = new Date();
  await user.save();

  return user;
};

export const loginUserService = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new AppError("Invalid email or password", 401);
  }

  const token = generateToken({
    id: user._id,
    email: user.email,
  });

  return {
    token,
    user: {
      id: user._id,
      firstName: user.firstName,
      email: user.email,
    },
  };
};
