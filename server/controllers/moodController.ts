import { Router } from "express";
import { getAll, create, update, remove } from "../models/mood";
import { DataEnvelope, DataListEnvelope } from "../types/dataEnvelopes";
import { Mood } from "../data/moods";
import { verifyJWT } from "../middleware/auth";

const router = Router();

// GET moods by user
router.get("/", verifyJWT, async (req: any, res) => {
  try {
    const userId = req.user.id;

    const { list, count } = await getAll(userId);

    const response: DataListEnvelope<Mood> = {
      data: list,
      total: count,
      isSuccess: true,
    };

    res.send(response);
  } catch (err) {
    console.error("Error fetching moods:", err);
    res.status(500).send({ data: null, isSuccess: false });
  }
});

// POST create mood
router.post("/", verifyJWT, async (req: any, res) => {
  try {
    const userId = req.user.id;

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
  } catch (err) {
    console.error("Error creating mood:", err);
    res.status(500).send({ data: null, isSuccess: false });
  }
});

// PATCH update mood
router.patch("/:id", verifyJWT, async (req, res) => {
  try {
    const id = Number(req.params.id);

    const updated = await update(id, req.body);

    const response: DataEnvelope<Mood | null> = {
      data: updated,
      isSuccess: updated !== null,
    };

    res.send(response);
  } catch (err) {
    console.error("Error updating mood:", err);
    res.status(500).send({ data: null, isSuccess: false });
  }
});

// DELETE mood (important for your MoodList delete button)
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
    console.error("Error deleting mood:", err);
    res.status(500).send({ data: null, isSuccess: false });
  }
});

export default router;
