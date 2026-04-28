import { Router } from "express";
import { getAll, create, update, remove, getById } from "../models/mood";
import { DataEnvelope, DataListEnvelope } from "../types/dataEnvelopes";
import { Mood } from "../data/moods";
import { verifyJWT } from "../middleware/auth";

const router = Router();

// GET moods by user
router.get("/", verifyJWT, async (req: any, res) => {
  try {
    const userId = req.user.id;

    const { list, count } = await getAll(userId);

    res.send({
      data: list,
      total: count,
      isSuccess: true,
    } as DataListEnvelope<Mood>);
  } catch (err) {
    console.error("Error fetching moods:", err);
    res.status(500).send({
      data: null,
      isSuccess: false,
    });
  }
});

// POST mood
router.post("/", verifyJWT, async (req: any, res) => {
  try {
    const userId = req.user.id;

    const mood = await create({
      userId,
      mood: req.body.mood,
      date: req.body.date,
      comment: req.body.comment,
    });

    res.send({
      data: mood,
      isSuccess: true,
    } as DataEnvelope<Mood>);
  } catch (err) {
    console.error("Error creating mood:", err);
    res.status(500).send({
      data: null,
      isSuccess: false,
    });
  }
});

// PATCH mood
router.patch("/:id", verifyJWT, async (req: any, res) => {
  try {
    const id = Number(req.params.id);
    const userId = req.user.id;

    const existing = await getById(id);
    if (!existing) {
      return res.status(404).send({
        data: null,
        isSuccess: false,
        message: "Mood not found",
      });
    }

    if (existing.user_id !== userId) {
      return res.status(403).send({
        data: null,
        isSuccess: false,
        message: "Forbidden",
      });
    }

    const updated = await update(id, req.body);

    res.send({
      data: updated,
      isSuccess: true,
    } as DataEnvelope<Mood>);
  } catch (err) {
    console.error("Error updating mood:", err);
    res.status(500).send({
      data: null,
      isSuccess: false,
    });
  }
});

// DELETE mood
router.delete("/:id", verifyJWT, async (req: any, res) => {
  try {
    const id = Number(req.params.id);
    const userId = req.user.id;

    const existing = await getById(id);
    if (!existing) {
      return res.status(404).send({
        data: null,
        isSuccess: false,
        message: "Mood not found",
      });
    }

    if (existing.user_id !== userId) {
      return res.status(403).send({
        data: null,
        isSuccess: false,
        message: "Forbidden",
      });
    }

    const deleted = await remove(id);

    res.send({
      data: deleted,
      isSuccess: true,
    } as DataEnvelope<boolean>);
  } catch (err) {
    console.error("Error deleting mood:", err);
    res.status(500).send({
      data: null,
      isSuccess: false,
    });
  }
});

export default router;
