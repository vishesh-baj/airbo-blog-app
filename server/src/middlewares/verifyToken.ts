import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Define user property on Request type
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

// Middleware function to verify JWT token
export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  // Ensure JWT secret is defined
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT secret is not defined");
  }

  // Verify token
  jwt.verify(token, process.env.JWT_SECRET, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = decoded; // Attach user object to request
    next();
  });
};
