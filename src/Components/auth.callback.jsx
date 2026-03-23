import { redirect } from "react-router";

import { createSupabaseClient } from "../lib/supabase.client";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ request }) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next") || "/signin"; // Where to send user after login

  if (code) {
    const supabase = createSupabaseClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return redirect(next);
    } else {
      console.error("OAuth callback error from Supabase:", error);
    }
  }

  // Return to sign in if there's an error
  return redirect("/signin?error=oauth_callback_failed");
}

export default function AuthCallback() {
  return <div>Authenticating...</div>;
}
