import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: import.meta.env.VITE_FRONTEND_CLIENT_URL,
      },
    });
  };
  return (
    <div>
      <Button onClick={handleLogin}>Login with Google</Button>
    </div>
  );
}
