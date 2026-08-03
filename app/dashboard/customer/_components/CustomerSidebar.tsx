"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  LayoutDashboard,
  CalendarDays,
  User,
  Wrench,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    href: "/dashboard/customer",
    icon: LayoutDashboard,
  },
  {
    title: "Home",
    href: "/",
    icon: House,
  },
  {
    title: "Services",
    href: "/services",
    icon: Wrench,
  },
  {
    title: "My Bookings",
    href: "/dashboard/customer/bookings",
    icon: CalendarDays,
  },
  {
    title: "Profile",
    href: "/dashboard/customer/profile",
    icon: User,
  },
];

export default function CustomerSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 border-r bg-white md:block">
      <div className="border-b p-6">
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-600">
            🔧 FixItNow
          </h1>
        </Link>
      </div>

      <nav className="space-y-2 p-4">
        {menus.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 ${
                active
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-100"
              }`}
            >
              <Icon size={18} />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}