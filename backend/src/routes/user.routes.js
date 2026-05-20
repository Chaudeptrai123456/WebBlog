import express from "express";
import passport from "../config/passport.js";
import { googleCallback } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import User from "../models/user.model.js";
const router = express.Router();

router.get("/profile", verifyToken);
router.get("/test", async (req, res) => {
  console.log("test"); 
});
export default router;
