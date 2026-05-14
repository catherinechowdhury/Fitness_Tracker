import { connect } from "../services/supabase";
import { NewWorkout } from "../types/dataEnvelopes";

const supabase = connect();

// GET all workouts (user-specific or admin) with pagination
export async function getAll(
  userId?: number,
  page: number = 1,
  limit: number = 5,
) {
  const from = (page - 1) * limit;
  const to = from + limit - 1;
  let query = supabase
    .from("workouts")
    .select("*", { count: "exact" })
    .order("date", { ascending: false });
  if (userId !== undefined) {
    query = query.eq("user_id", userId);
  }

  const { data, error, count } = await query.range(from, to);

  if (error) throw error;

  return {
    list: data ?? [],
    count: count ?? 0,
  };
}

// CREATE
export async function create(workout: NewWorkout) {
  const { data, error } = await supabase
    .from("workouts")
    .insert({
      user_id: workout.userId,
      date: workout.date,
      type: workout.type,
      duration: workout.duration,
      mood_before: workout.moodBefore,
      mood_after: workout.moodAfter,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

// GET by ID
export async function getById(id: number) {
  const { data, error } = await supabase
    .from("workouts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return null;
  return data;
}

// UPDATE (safe: never updates user_id)
export async function update(id: number, workout: Partial<NewWorkout>) {
  const { data, error } = await supabase
    .from("workouts")
    .update({
      date: workout.date,
      type: workout.type,
      duration: workout.duration,
      mood_before: workout.moodBefore,
      mood_after: workout.moodAfter,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

// DELETE
export async function remove(id: number) {
  const { error } = await supabase.from("workouts").delete().eq("id", id);

  if (error) throw error;

  return true;
}
