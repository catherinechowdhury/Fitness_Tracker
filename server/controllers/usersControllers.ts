import { Router } from "express";
import { getAllUsers, createUser, deleteUser } from "../models/user";
import { verifyJWT } from "../middleware/auth";

const router = Router();

// GET all users
router.get("/", verifyJWT, async (_req, res) => {
  try {
    const users = await getAllUsers();
    res.send({ data: users, isSuccess: true });
  } catch (err) {
    res.status(500).send({ isSuccess: false, error: err });
  }
});

// POST create user
router.post("/", verifyJWT, async (req, res) => {
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

//DELETE user (admin only)
router.delete("/:id", verifyJWT, async (req, res) => {
  try {
    const id = Number(req.params.id);
    await deleteUser(id);
    res.send({ isSuccess: true });
  } catch (err) {
    res.status(500).send({ isSuccess: false, error: err });
  }
});

export default router;
