import { connect } from "../services/supabase";

const supabase = connect();

// GET all workouts
export async function getAll(userId: number) {
  const { data, error } = await supabase
    .from("workouts")
    .select("*")
    .eq("user_id", userId);

  if (error) throw error;

  return {
    list: data,
    count: data.length,
  };
}

// CREATE
export async function create(workout: any) {
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

// UPDATE
export async function update(id: number, data: any) {
  const { data: updated, error } = await supabase
    .from("workouts")
    .update(data)
    .eq("id", id)
    .select()
    .single();

  if (error) return null;
  return updated;
}

// DELETE
export async function remove(id: number) {
  const { error } = await supabase.from("workouts").delete().eq("id", id);

  return !error;
}
