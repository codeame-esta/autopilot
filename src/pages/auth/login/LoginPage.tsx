import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    setIsLoading(true);
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    setIsLoading(false);
  };
  return (
    <div>
      <Button onClick={handleLogin} disabled={isLoading}>
        {isLoading ? "Loading..." : "Login with Google"}
      </Button>
    </div>
  );
}
