export type Workout = {
  id: number;
  user_id: number;
  date: string;
  type: string;
  duration: string;
  mood_before: string;
  mood_after: string;
};

export let workouts: Workout[] = [];
export let nextId = 1;

export function incrementWorkoutId() {
  return nextId++;
}
