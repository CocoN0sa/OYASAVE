import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { createSupabaseClient } from "../lib/supabase.client";

export default function AuthCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const supabase = createSupabaseClient();
    const next = searchParams.get("next") || "/personalInfo";
    const errorDescription = searchParams.get("error_description");

    if (errorDescription) {
      console.error("OAuth error:", errorDescription);
      navigate(`/signin?error=${encodeURIComponent(errorDescription)}`, { replace: true });
      return;
    }

    // When running in a browser, Supabase automatically detects the "code" query parameter 
    // and performs the PKCE exchange internally. Calling `exchangeCodeForSession` manually
    // consumes the storage, causing the "PKCE code verifier not found" error!
    // Instead, we simply wait for the automatic session resolution:
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" || session) {
        navigate(next, { replace: true });
      } else if (event === "USER_UPDATED") {
        navigate(next, { replace: true });
      }
    });

    // Check if the session is already established before the listener attached
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate(next, { replace: true });
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [navigate, searchParams]);

  return (
    <div className="flex justify-center items-center h-screen font-aeonik">
      <div className="text-[#44A1A0] text-lg font-bold">Authenticating...</div>
    </div>
  );
}
