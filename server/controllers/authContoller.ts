import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

// fake login using your existing dummy users
router.post("/login", (req, res) => {
  const { userId } = req.body;

  // 🔥 you can hardcode admin logic
  const isAdmin = userId === 1;

  const token = jwt.sign(
    {
      id: userId,
      role: isAdmin ? "admin" : "user",
    },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" },
  );

  res.send({ token });
});

export default router;
