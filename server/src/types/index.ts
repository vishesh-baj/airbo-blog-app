import { Document, Types } from "mongoose";

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
}

export interface PostDocument extends Document {
  title: string;
  content: string;
  author: Types.ObjectId | UserDocument;
  createdAt: Date;
  updatedAt: Date;
  likes: Types.ObjectId | UserDocument[];
}
