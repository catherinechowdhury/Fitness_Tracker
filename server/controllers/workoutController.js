import Workout from "../models/Workout.js";
import { getAllWorkouts, addWorkout } from "../data/workoutData.js";

export function getWorkouts(req, res) {
  res.json(getAllWorkouts());
}

export function createWorkout(req, res) {
  try {
    const workout = new Workout(req.body);
    addWorkout(workout);
    res.status(201).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
