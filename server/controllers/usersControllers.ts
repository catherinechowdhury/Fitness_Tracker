import { Router } from "express";
import {
  getAllUsers,
  createUser,
  searchUsersByEmail,
  deleteUser,
} from "../models/user";
import { verifyJWT, requireAdmin } from "../middleware/auth";
//import { connect } from "../services/supabase";

//const supabase = connect();
const router = Router();

// GET search users (public)
// router.get("/search", async (req, res) => {
//   try {
//     const q = String(req.query.q ?? "").trim();
//     if (q.length < 2) {
//       return res.json([]);
//     }
//     const users = await searchUsersByEmail(q);
//     res.send({ data: users, isSuccess: true });
//   } catch (err) {
//     res.status(500).send({ isSuccess: false, error: err });
//   }
// });
router.get("/search", async (req, res) => {
  try {
    const q = String(req.query.q ?? "").trim();

    if (q.length < 2) {
      return res.send({ data: [], isSuccess: true });
    }

    const users = await searchUsersByEmail(q);

    res.send({ data: users, isSuccess: true });
  } catch (err) {
    res.status(500).send({ isSuccess: false, error: err });
  }
});
// GET all users (admin only)
router.get("/", verifyJWT, requireAdmin, async (_req, res) => {
  try {
    const users = await getAllUsers();
    res.send({ data: users, isSuccess: true });
  } catch (err) {
    res.status(500).send({ isSuccess: false, error: err });
  }
});

// POST create user (public — used for sign-up)
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

// DELETE user (admin only)
router.delete("/:id", verifyJWT, requireAdmin, async (req, res) => {
  try {
    const id = Number(req.params.id);
    await deleteUser(id);
    res.send({ isSuccess: true });
  } catch (err) {
    res.status(500).send({ isSuccess: false, error: err });
  }
});

export default router;
