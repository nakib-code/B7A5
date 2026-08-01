import { ReactNode } from "react";

import DashboardNavbar from "./_components/DashboardNavbar";
import Sidebar from "./_components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Top Navbar */}
      <DashboardNavbar />

      <div className="mx-auto flex max-w-7xl">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}