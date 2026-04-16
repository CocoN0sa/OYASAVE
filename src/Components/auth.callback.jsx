import { redirect } from "react-router";

// Supabase removed
export async function loader({ request }) {
  console.log("Auth callback - demo mode, redirecting to home");
  return redirect("/");
}

export default function AuthCallback() {
  return <div>Demo mode - redirecting to home...</div>;
}
