import mongoose, { Schema, Model } from "mongoose";
import { PostDocument } from "../types";

const PostSchema: Schema<PostDocument> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      unique: true,
    },

    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const PostModel: Model<PostDocument> = mongoose.model(
  "post",
  PostSchema
);
