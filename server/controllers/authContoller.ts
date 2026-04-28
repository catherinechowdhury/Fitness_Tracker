import { Router } from "express";
import jwt from "jsonwebtoken";
import { connect } from "../services/supabase";

const supabase = connect();

const router = Router();

router.post("/login", async (req, res) => {
  let { email, password } = req.body;

  email = email?.trim().toLowerCase();
  password = password?.trim();

  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .maybeSingle();

  if (error || !user) {
    return res.status(401).send({
      isSuccess: false,
      message: "User not found",
    });
  }

  if (user.password.trim() !== password) {
    return res.status(401).send({
      isSuccess: false,
      message: "Wrong password",
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      role: user.id === 1 ? "admin" : "user",
    },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" },
  );

  return res.send({ token });
});

export default router;
