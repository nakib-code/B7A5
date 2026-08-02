"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  LayoutDashboard,
  Users,
  Wrench,
  CalendarDays,
  FolderTree,
  User,
} from "lucide-react";

const menus = [
  {
    title: "Home",
    href: "/",
    icon: House,
  },
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
    title: "Categories",
    href: "/dashboard/admin/categories",
    icon: FolderTree,
  },
  {
    title: "Bookings",
    href: "/dashboard/admin/bookings",
    icon: CalendarDays,
  },
  {
    title: "Profile",
    href: "/dashboard/admin/profile",
    icon: User,
  },
];

export default function AdminSidebar() {
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