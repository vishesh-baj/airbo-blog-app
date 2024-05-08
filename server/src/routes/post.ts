import { Router } from "express";
import {
  getAllPosts,
  updatePost,
  createPost,
  deletePost,
  getPostById,
  getAllUserPosts,
} from "../controllers/post";
import { verifyToken } from "../middlewares/verifyToken";
const router = Router();

// private routes
router.get("/get-all-posts", verifyToken, getAllPosts);
router.post("/create-post", verifyToken, createPost);
router.put("/update-post/:id", verifyToken, updatePost);
router.delete("/delete-post/:id", verifyToken, deletePost);
router.get("/get-post-by-id/:id", verifyToken, getPostById);
// public route
router.get("/get-all-user-posts", getAllUserPosts);
export default router;
