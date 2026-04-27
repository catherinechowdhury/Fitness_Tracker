import { Router } from "express";
import jwt from "jsonwebtoken";
import { users } from "../data/users";

const router = Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    res.status(401).send({ isSuccess: false, message: "Invalid credentials" });
    return;
  }

  const token = jwt.sign(
    {
      id: user.id,
      role: user.id === 1 ? "admin" : "user",
    },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" },
  );

  res.send({ token });
});

export default router;
