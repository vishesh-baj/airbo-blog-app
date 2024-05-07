import mongoose, { Model, Schema } from "mongoose";
import { UserDocument } from "../types";

const UserSchema: Schema<UserDocument> = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel: Model<UserDocument> = mongoose.model(
  "user",
  UserSchema
);
