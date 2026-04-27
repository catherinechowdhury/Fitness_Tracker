import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/login", (req, res) => {
  const { email } = req.body;

  const token = jwt.sign(
    { id: 1, email }, // fake user for demo
    process.env.JWT_SECRET!,
    { expiresIn: "1h" },
  );

  res.send({ token });
});

export default router;
