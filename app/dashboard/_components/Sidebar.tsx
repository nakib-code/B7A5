"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Briefcase,
  CalendarDays,
  User,
  Users,
  Wrench,
  DollarSign,
} from "lucide-react";

import { useCurrentUser } from "@/hooks/use-current-user";

const menus = {
  CUSTOMER: [
    {
      title: "Dashboard",
      href: "/dashboard/customer",
      icon: LayoutDashboard,
    },
    {
      title: "Services",
      href: "/services",
      icon: Wrench,
    },
    {
      title: "Bookings",
      href: "/dashboard/customer/bookings",
      icon: CalendarDays,
    },
    {
      title: "Profile",
      href: "/dashboard/customer/profile",
      icon: User,
    },
  ],

  TECHNICIAN: [
    {
      title: "Dashboard",
      href: "/dashboard/technician",
      icon: LayoutDashboard,
    },
    {
      title: "My Services",
      href: "/dashboard/technician/services",
      icon: Briefcase,
    },
    {
      title: "Requests",
      href: "/dashboard/technician/requests",
      icon: CalendarDays,
    },
    {
      title: "Earnings",
      href: "/dashboard/technician/earnings",
      icon: DollarSign,
    },
  ],

  ADMIN: [
    {
      title: "Dashboard",
      href: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      href: "/dashboard/admin/users",
      icon: Users,
    },
    {
      title: "Services",
      href: "/dashboard/admin/services",
      icon: Wrench,
    },
    {
      title: "Bookings",
      href: "/dashboard/admin/bookings",
      icon: CalendarDays,
    },
  ],
} as const;

export default function Sidebar() {
  const pathname = usePathname();

  const user = useCurrentUser();

  const items =
    menus[user?.role ?? "CUSTOMER"];

  return (
    <aside className="hidden w-64 border-r bg-white md:block">
      <div className="border-b p-6">
        <h1 className="text-2xl font-bold text-blue-600">
          🔧 FixItNow
        </h1>
      </div>

      <nav className="space-y-2 p-4">
        {items.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                active
                  ? "bg-blue-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Icon size={18} />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}