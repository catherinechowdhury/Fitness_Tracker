import { connect } from "../services/supabase";

const supabase = connect();

export async function getAll(userId: number) {
  const { data, error } = await supabase
    .from("moods")
    .select("*")
    .eq("user_id", userId);

  if (error) throw error;

  return {
    list: data,
    count: data.length,
  };
}

export async function create(mood: any) {
  const { data, error } = await supabase
    .from("moods")
    .insert({
      user_id: mood.userId,
      mood: mood.mood,
      date: mood.date,
      comment: mood.comment,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function update(id: number, data: any) {
  const { data: updated, error } = await supabase
    .from("moods")
    .update(data)
    .eq("id", id)
    .select()
    .single();

  if (error) return null;
  return updated;
}

export async function remove(id: number) {
  const { error } = await supabase.from("moods").delete().eq("id", id);

  return !error;
}
