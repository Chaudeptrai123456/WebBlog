// controllers/auth.controller.js
import jwt from "jsonwebtoken";

export const googleCallback = (req, res) => {
  const user = req.user;
  console.log("Authenticated user:", user);
  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" },
  );

  res.redirect(`http://localhost:3000?token=${token}`);
};
