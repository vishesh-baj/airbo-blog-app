import { Router } from "express";
import {
  getAllPosts,
  updatePost,
  createPost,
  deletePost,
} from "../controllers/post";
import { verifyToken } from "../middlewares/verifyToken";
const router = Router();

router.get("/get-all-posts", verifyToken, getAllPosts);
router.post("/create-post", verifyToken, createPost);
router.put("/update-post/:id", verifyToken, updatePost);
router.delete("/delete-post/:id", verifyToken, deletePost);
export default router;
