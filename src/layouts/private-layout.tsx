import { Sidebar } from "@/components/common/sidebar";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      {/* Mobile top bar spacer so content doesn't sit behind the hamburger */}
      <div className="lg:hidden h-16 border-b border-border bg-background sticky top-0 z-30" />
      <main className="lg:pl-72">
        <div className="p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
