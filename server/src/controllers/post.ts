import { Request, Response } from "express";
import { PostModel } from "../models/post";

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const { username } = req.user;
    if (!username) {
      return res.status(404).json({ message: "User ID not provided" });
    }
    const posts = await PostModel.find({ author: username });
    return res
      .status(200)
      .json({ message: "Fetched posts successfully", posts });
  } catch (error) {
    console.error("Error in getAllPosts:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const { username } = req.user;
    console.log(req.user);
    const { title, content } = req.body;
    const newPost = new PostModel({ title, content, author: username });
    const savedPost = await newPost.save();
    res.status(200).json({ message: "post created successfully", savedPost });
  } catch (error) {
    console.error("Error in getAllPosts:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    const { title, content } = req.body;
    if (!postId) {
      return res.status(404).json({ message: "Post ID not provided" });
    }
    const updatedPost = await PostModel.findByIdAndUpdate(
      postId,
      { title, content },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post updated successfully", updatedPost });
  } catch (error) {
    console.error("Error in updatePost:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    const deletedPost = await PostModel.findByIdAndDelete(postId);
    res.status(200).json({ message: "post deleted successfully", deletedPost });
  } catch (error) {
    console.error("Error in deletePost:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getPostById = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    if (!postId) res.status(404).json({ message: "Post ID not provided" });
    const searchedPost = await PostModel.findById(postId);
    res.status(200).json({ message: "Fetched post", post: searchedPost });
  } catch (error) {
    console.error("Error in getPostById:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllUserPosts = async (req: Request, res: Response) => {
  try {
    const allUserPosts = await PostModel.find();
    if (!allUserPosts) {
      res.status(404).json({ message: "Unable to fetch all posts" });
    }
    res
      .status(200)
      .json({ message: "Posts fetched successfully", posts: allUserPosts });
  } catch (error) {
    console.error("Error in getAllUserPosts:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
