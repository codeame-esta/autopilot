import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import PrivateRouter from "./private-router/private-router";
import PublicRouter from "./public-router/public-router";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { FullPageLoader } from "@/components/common/full-page-loader";
import type { User } from "@supabase/supabase-js";

export default function Router() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
      setLoading(false);
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <FullPageLoader />;
  }

  const isAuthenticated = !!user;
  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route path="/dashboard/*" element={<PrivateRouter />} />
        ) : (
          <Route path="/auth/*" element={<PublicRouter />} />
        )}
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/dashboard" : "/auth/login"} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}
