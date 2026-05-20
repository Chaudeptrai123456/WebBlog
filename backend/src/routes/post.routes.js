import express from "express";
import {
  createPost,
  getPosts,
  getPostBySlug,
} from "../controllers/post.controller.js";
import { requireRole } from "../middlewares/role.middleware.js";
import { upload } from "../middlewares/uploads.middleware.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/create", verifyToken,  requireRole("ADMIN"),upload.array('files'), createPost);
router.get("/", getPosts);
router.get("/:slug", getPostBySlug);

export default router;
