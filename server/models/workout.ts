import { Workout, workouts, incrementWorkoutId } from "../data/workout";

// GET all workouts for user
export function getAll(userId: number) {
  const list = workouts.filter((w) => w.userId === userId);

  return {
    list,
    count: list.length,
  };
}

// CREATE workout
export function create(workout: Omit<Workout, "id">) {
  const newWorkout: Workout = {
    id: incrementWorkoutId(),
    ...workout,
  };

  workouts.push(newWorkout);
  return newWorkout;
}

// UPDATE workout
export function update(id: number, data: Partial<Workout>) {
  const index = workouts.findIndex((w) => w.id === id);
  if (index === -1) return null;

  workouts[index] = {
    ...workouts[index],
    ...data,
  };

  return workouts[index];
}
