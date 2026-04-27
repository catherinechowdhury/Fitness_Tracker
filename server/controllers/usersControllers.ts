import { Router } from "express";
import { getAll, getById, create, update, remove } from "../models/user";
import { DataEnvelope, DataListEnvelope } from "../types/dataEnvelopes";
import { User } from "../data/users";

const router = Router();

// GET all users
router.get("/", (_req, res) => {
  const users = getAll();

  const response: DataListEnvelope<User> = {
    data: users,
    total: users.length,
    isSuccess: true,
  };

  res.send(response);
});

// GET user by id
router.get("/:id", (req, res) => {
  const user = getById(Number(req.params.id));

  const response: DataEnvelope<User | null> = {
    data: user ?? null,
    isSuccess: !!user,
  };

  res.send(response);
});

// CREATE user
router.post("/", (req, res) => {
  const user = create({
    name: req.body.name,
    email: req.body.email,
  });

  const response: DataEnvelope<User> = {
    data: user,
    isSuccess: true,
  };

  res.send(response);
});

// UPDATE user
router.patch("/:id", (req, res) => {
  const updated = update(Number(req.params.id), req.body);

  const response: DataEnvelope<User | null> = {
    data: updated,
    isSuccess: updated !== null,
  };

  res.send(response);
});

// DELETE user
router.delete("/:id", (req, res) => {
  const deleted = remove(Number(req.params.id));

  const response: DataEnvelope<boolean> = {
    data: deleted,
    isSuccess: deleted,
  };

  res.send(response);
});

export default router;
