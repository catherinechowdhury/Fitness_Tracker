import { Router } from "express";
import jwt from "jsonwebtoken";
import { connect } from "../services/supabase";

const supabase = connect();

const router = Router();

router.post("/login", async (req, res) => {
  console.log("LOGIN BODY:", req.body);

  const { email, password } = req.body;

  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error || !user || user.password !== password) {
    return res.status(401).send({
      isSuccess: false,
      message: "Invalid credentials",
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
