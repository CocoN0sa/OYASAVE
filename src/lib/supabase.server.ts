import { createServerClient, parseCookieHeader, serializeCookieHeader } from "@supabase/ssr";

export function createSupabaseServerClient(request: Request) {
  const headers = new Headers();

  const supabaseUrl = (typeof process !== "undefined" && process.env.VITE_SUPABASE_URL) || import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = (typeof process !== "undefined" && process.env.VITE_SUPABASE_ANON_KEY) || import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase URL and Anon Key must be provided in the environment variables.");
  }

  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        const cookieHeader = request.headers.get("Cookie") || (typeof document !== "undefined" ? document.cookie : "");
        return parseCookieHeader(cookieHeader).map(
          (cookie) => ({ name: cookie.name, value: cookie.value ?? "" })
        );
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          headers.append("Set-Cookie", serializeCookieHeader(name, value, options))
        );
      },
    },
  });

  return { supabase, headers };
}
