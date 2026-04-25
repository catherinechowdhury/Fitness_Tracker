import { Router } from "express";
import { getAll, create, update } from "../models/workout";
import { DataEnvelope, DataListEnvelope } from "../types/dataEnvelopes";
import { Workout } from "../data/workout";

const router = Router();

// GET workouts by user
router.get("/:userId", (req, res) => {
  const userId = Number(req.params.userId);

  const { list, count } = getAll(userId);

  const response: DataListEnvelope<Workout> = {
    data: list,
    total: count,
    isSuccess: true,
  };

  res.send(response);
});

// POST create workout
router.post("/:userId", (req, res) => {
  const userId = Number(req.params.userId);

  const workout = create({
    userId,
    date: req.body.date,
    type: req.body.type,
    duration: req.body.duration,
    moodBefore: req.body.moodBefore,
    moodAfter: req.body.moodAfter,
  });

  const response: DataEnvelope<Workout> = {
    data: workout,
    isSuccess: true,
  };

  res.send(response);
});

// PATCH update workout
router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);

  const updated = update(id, req.body);

  const response: DataEnvelope<Workout | null> = {
    data: updated,
    isSuccess: updated !== null,
  };

  res.send(response);
});

export default router;
