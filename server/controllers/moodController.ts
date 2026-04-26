import { Router } from "express";
import { getAll, create, update, remove } from "../models/mood";
import { DataEnvelope, DataListEnvelope } from "../types/dataEnvelopes";
import { Mood } from "../data/moods";

const router = Router();

// GET moods by user
router.get("/:userId", (req, res) => {
  const userId = Number(req.params.userId);

  const { list, count } = getAll(userId);

  const response: DataListEnvelope<Mood> = {
    data: list,
    total: count,
    isSuccess: true,
  };

  res.send(response);
});

// POST create mood
router.post("/:userId", (req, res) => {
  const userId = Number(req.params.userId);

  const mood = create({
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
router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);

  const updated = update(id, req.body);

  const response: DataEnvelope<Mood | null> = {
    data: updated,
    isSuccess: updated !== null,
  };

  res.send(response);
});

// DELETE mood (important for your MoodList delete button)
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  const deleted = remove(id);

  const response: DataEnvelope<boolean> = {
    data: deleted,
    isSuccess: deleted,
  };

  res.send(response);
});

export default router;
