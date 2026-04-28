import { Router } from "express";
import jwt from "jsonwebtoken";
import { connect } from "../services/supabase";

const supabase = connect();

const router = Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  console.log("LOGIN BODY:", req.body);
  console.log("INPUT PASSWORD:", password);
  console.log("DB USER:", user);
  console.log("DB PASSWORD:", user?.password);

  if (error || !user) {
    return res.status(401).send({
      isSuccess: false,
      message: "Invalid credentials",
    });
  }

  if (user.password !== password) {
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
