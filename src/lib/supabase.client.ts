import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

let supabase: SupabaseClient | undefined;

export function createSupabaseClient(): SupabaseClient {
  if (supabase) return supabase;

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase URL and Anon Key must be provided in the environment variables.");
  }

  const client = createBrowserClient(supabaseUrl, supabaseKey, {
    cookies: {
      get(name: string) {
        if (typeof document === "undefined") return "";
        const decode = (s: string) => decodeURIComponent(s.replace(/\+/g, " "));
        const cookies = document.cookie ? document.cookie.split("; ") : [];
        for (let i = 0; i < cookies.length; i++) {
          const parts = cookies[i].split("=");
          const cookieName = decode(parts[0]);
          if (name === cookieName) {
            return decode(parts.slice(1).join("="));
          }
        }
        return "";
      },
      set(name: string, value: string, options: any) {
        if (typeof document === "undefined") return;
        let cookieString = `${name}=${value}; Path=${options.path || "/"}`;
        if (options.maxAge) cookieString += `; Max-Age=${options.maxAge}`;
        if (options.domain) cookieString += `; Domain=${options.domain}`;
        if (options.sameSite) cookieString += `; SameSite=${options.sameSite || "Lax"}`;
        if (options.secure || location.protocol === "https:") cookieString += "; Secure";
        document.cookie = cookieString;
      },
      remove(name: string, options: any) {
        if (typeof document === "undefined") return;
        document.cookie = `${encodeURIComponent(name)}=; Max-Age=-1${options.path ? `; Path=${options.path}` : ""}${options.domain ? `; Domain=${options.domain}` : ""}`;
      },
    },
  });

  supabase = client;
  return client;
}
