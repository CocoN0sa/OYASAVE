import { createClient } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";


let supabase: SupabaseClient | undefined;

export function createSupabaseClient(): SupabaseClient {
  if (supabase) return supabase;

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase URL and Anon Key must be provided in the environment variables.");
  }

  const client = createClient(supabaseUrl, supabaseKey);



  supabase = client;
  return client;
}
