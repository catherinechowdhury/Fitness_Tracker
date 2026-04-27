import { Router } from "express";
import { getAllUsers, createUser } from "../models/user";

const router = Router();

// GET all users
router.get("/", async (_req, res) => {
  try {
    const users = await getAllUsers();
    res.send({ data: users, isSuccess: true });
  } catch (err) {
    res.status(500).send({ isSuccess: false, error: err });
  }
});

// POST create user
router.post("/", async (req, res) => {
  try {
    const user = await createUser(
      req.body.name,
      req.body.email,
      req.body.password,
    );
    res.send({ data: user, isSuccess: true });
  } catch (err) {
    res.status(500).send({ isSuccess: false, error: err });
  }
});

export default router;
