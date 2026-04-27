import { connect } from "../services/supabase";

const supabase = connect();

// GET all users
export async function getAllUsers() {
  const { data, error } = await supabase.from("users").select("*").order("id");

  if (error) throw error;
  return data;
}

// CREATE user
export async function createUser(
  name: string,
  email?: string,
  password?: string,
) {
  const { data, error } = await supabase
    .from("users")
    .insert({ name, email, password })
    .select()
    .single();

  if (error) throw error;
  return data;
}
