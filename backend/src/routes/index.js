import express from "express";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import postRoutes from "./post.routes.js";
import { requireRole } from "../middlewares/role.middleware.js";
import isAdmin from "../middlewares/isAdmin.middleware.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/posts", postRoutes);
export default router;
