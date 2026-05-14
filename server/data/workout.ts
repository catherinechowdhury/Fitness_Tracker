export type Workout = {
  id: number;
  userId: number;
  date: string;
  type: string;
  duration: string;
  moodBefore: string;
  moodAfter: string;
};

export let workouts: Workout[] = [];
export let nextId = 1;

export function incrementWorkoutId() {
  return nextId++;
}
