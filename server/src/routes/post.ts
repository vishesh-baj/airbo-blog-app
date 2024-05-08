import { Router } from "express";
import {
  getAllPosts,
  updatePost,
  createPost,
  deletePost,
  getPostById,
} from "../controllers/post";
import { verifyToken } from "../middlewares/verifyToken";
const router = Router();

router.get("/get-all-posts", verifyToken, getAllPosts);
router.post("/create-post", verifyToken, createPost);
router.put("/update-post/:id", verifyToken, updatePost);
router.delete("/delete-post/:id", verifyToken, deletePost);
router.get("/get-post-by-id/:id", verifyToken, getPostById);

export default router;
