import { connect } from "../services/supabase";

const supabase = connect();

// GET all users
export async function getAllUsers() {
  const { data, error } = await supabase.from("users").select("*").order("id");

  if (error) throw error;

  return {
    list: data ?? [],
    count: data?.length ?? 0,
  };
}

// CREATE user
export async function createUser(
  name: string,
  email?: string,
  password?: string,
) {
  const { data, error } = await supabase
    .from("users")
    .insert({
      name,
      email,
      password,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

// DELETE user
export async function deleteUser(id: number) {
  const { error } = await supabase.from("users").delete().eq("id", id);

  if (error) throw error;

  return true;
}
