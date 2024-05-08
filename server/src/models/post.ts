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
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
      unique: false,
    },

    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
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
