import DashboardNavbar from "@/app/dashboard/_components/DashboardNavbar";
import Sidebar from "@/app/dashboard/_components/Sidebar";
import { ReactNode } from "react";


export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="flex flex-1 flex-col">
        <DashboardNavbar />

        <section className="flex-1 p-6">
          {children}
        </section>
      </main>
    </div>
  );
}