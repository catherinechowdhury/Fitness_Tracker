import { Router } from "express";
import { getAll, create, update, remove } from "../models/mood";
import { DataEnvelope, DataListEnvelope } from "../types/dataEnvelopes";
import { Mood } from "../data/moods";

const router = Router();

// GET moods by user
router.get("/:userId", async (req, res) => {
  const userId = Number(req.params.userId);

  const { list, count } = await getAll(userId);

  const response: DataListEnvelope<Mood> = {
    data: list,
    total: count,
    isSuccess: true,
  };

  res.send(response);
});

// POST create mood
router.post("/:userId", async (req, res) => {
  const userId = Number(req.params.userId);

  const mood = await create({
    userId,
    mood: req.body.mood,
    date: req.body.date,
    comment: req.body.comment,
  });

  const response: DataEnvelope<Mood> = {
    data: mood,
    isSuccess: true,
  };

  res.send(response);
});

// PATCH update mood
router.patch("/:id", async (req, res) => {
  const id = Number(req.params.id);

  const updated = await update(id, req.body);

  const response: DataEnvelope<Mood | null> = {
    data: updated,
    isSuccess: updated !== null,
  };

  res.send(response);
});

// DELETE mood (important for your MoodList delete button)
router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);

  const deleted = await remove(id);

  const response: DataEnvelope<boolean> = {
    data: deleted,
    isSuccess: deleted,
  };

  res.send(response);
});

export default router;
