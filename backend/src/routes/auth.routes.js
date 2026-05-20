// routes/auth.routes.js
import express from "express";
import passport from "../config/passport.js";
import { googleCallback } from "../controllers/auth.controller.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  googleCallback,
);
router.get("/user/profile", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Unauthorized - No token provided",
      });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user);
  } catch (err) {
    console.error("Profile error:", err);

    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
});
export default router;
