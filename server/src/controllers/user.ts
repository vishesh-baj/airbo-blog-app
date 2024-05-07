import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/user";
import { UserDocument } from "../types";

// Register route
export const register = async (req: Request, res: Response) => {
  console.log(req.body);
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    let user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    user = new UserModel({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    res
      .status(201)
      .json({ message: "User registered successfully", registeredUser: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user: UserDocument | null = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Ensure JWT secret is defined
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT secret is not defined");
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
