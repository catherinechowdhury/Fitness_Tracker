import { createClient } from "@supabase/supabase-js";

export function connect() {
  console.log("SUPABASE CONNECT KEY:", process.env.SUPABASE_KEY?.slice(0, 10));
  return createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);
}
