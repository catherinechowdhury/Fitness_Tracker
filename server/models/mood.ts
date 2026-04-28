import { connect } from "../services/supabase";
import { NewMood } from "../types/dataEnvelopes";

const supabase = connect();

export async function getAll(userId: number) {
  const { data, error } = await supabase
    .from("moods")
    .select("*")
    .eq("user_id", userId);

  if (error) throw error;

  return {
    list: data ?? [],
    count: data?.length ?? 0,
  };
}

export async function create(mood: NewMood) {
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

export async function getById(id: number) {
  const { data, error } = await supabase
    .from("moods")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return null;
  return data;
}

export async function update(id: number, mood: Partial<NewMood>) {
  // only allow safe fields (prevents accidental user_id overwrite)
  const updateData = {
    mood: mood.mood,
    date: mood.date,
    comment: mood.comment,
  };

  const { data, error } = await supabase
    .from("moods")
    .update(updateData)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function remove(id: number) {
  const { error } = await supabase.from("moods").delete().eq("id", id);

  if (error) throw error;
  return true;
}
