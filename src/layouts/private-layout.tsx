import { Sidebar } from "@/components/common/sidebar";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="pl-72">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
