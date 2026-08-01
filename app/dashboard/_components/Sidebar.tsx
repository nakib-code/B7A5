"use client";

import AdminSidebar from "@/app/dashboard/admin/_components/AdminSidebar";
import CustomerSidebar from "@/app/dashboard/customer/_components/CustomerSidebar";
import TechnicianSidebar from "@/app/dashboard/technician/_components/TechnicianSidebar";
import { useCurrentUser } from "@/hooks/use-current-user";


export default function Sidebar() {
  const { user, isLoading } = useCurrentUser();

  if (isLoading) {
    return (
      <aside className="hidden md:block w-64 border-r bg-white">
        Loading...
      </aside>
    );
  }

  switch (user?.role) {
    case "ADMIN":
      return <AdminSidebar />;

    case "TECHNICIAN":
      return <TechnicianSidebar />;

    default:
      return <CustomerSidebar />;
  }
}