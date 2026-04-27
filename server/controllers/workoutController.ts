import { Router } from "express";
import { getAll, create, update, remove } from "../models/workout";
import { DataEnvelope, DataListEnvelope } from "../types/dataEnvelopes";
import { Workout } from "../data/workout";
import { verifyJWT } from "../middleware/auth";

const router = Router();

// GET workouts by user
router.get("/:userId", verifyJWT, async (req, res) => {
  try {
    const userId = Number(req.params.userId);

    const { list, count } = await getAll(userId);

    const response: DataListEnvelope<Workout> = {
      data: list,
      total: count,
      isSuccess: true,
    };

    res.send(response);
  } catch (err) {
    console.error("Error fetching workouts:", err);
    res.status(500).send({ data: null, isSuccess: false });
  }
});

// POST create workout
router.post("/:userId", verifyJWT, async (req, res) => {
  try {
    const userId = Number(req.params.userId);

    const workout = await create({
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
  } catch (err) {
    console.error("Error creating workout:", err);
    res.status(500).send({ data: null, isSuccess: false });
  }
});

// PATCH update workout
router.patch("/:id", verifyJWT, async (req, res) => {
  try {
    const id = Number(req.params.id);

    const updated = await update(id, req.body);

    const response: DataEnvelope<Workout | null> = {
      data: updated,
      isSuccess: updated !== null,
    };

    res.send(response);
  } catch (err) {
    console.error("Error updating workout:", err);
    res.status(500).send({ data: null, isSuccess: false });
  }
});

// DELETE workout
router.delete("/:id", verifyJWT, async (req, res) => {
  try {
    const id = Number(req.params.id);

    const deleted = await remove(id);

    const response: DataEnvelope<boolean> = {
      data: deleted,
      isSuccess: deleted,
    };

    res.send(response);
  } catch (err) {
    console.error("Error deleting workout:", err);
    res.status(500).send({ data: null, isSuccess: false });
  }
});

export default router;
