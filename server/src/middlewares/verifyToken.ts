import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT secret is not defined");
  }

  // Verify token
  jwt.verify(token, process.env.JWT_SECRET, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = decoded;
    next();
  });
};
