import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { DashboardHeader } from "./components/dashboard-header";

export default function DashboardPage() {
  const [userName, setUserName] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const name =
        user?.user_metadata?.full_name ?? user?.user_metadata?.name ?? user?.email?.split("@")[0];
      setUserName(name);
      setLoading(false);
    };

    fetchUser();
  }, []);

  return (
    <div>
      <DashboardHeader userName={userName} loading={loading} />
    </div>
  );
}
