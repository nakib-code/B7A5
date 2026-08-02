"use client";

import { useAdminUsers } from "@/hooks/use-admin-users";
import { useAdminBookings } from "@/hooks/use-admin-bookings";
import { useAdminCategories } from "@/hooks/use-admin-categories";


import {
  Users,
  UserCog,
  User,
  CalendarCheck,
  FolderOpen,
  Banknote,
} from "lucide-react";
import DashboardCard from "@/components/admin/dashboard/DashboardCard";

const AdminDashboard = () => {
  const {
    data: users = [],
    isLoading: usersLoading,
  } = useAdminUsers();

  const {
    data: bookings = [],
    isLoading: bookingsLoading,
  } = useAdminBookings();

  const {
    data: categories = [],
    isLoading: categoriesLoading,
  } = useAdminCategories();

  if (
    usersLoading ||
    bookingsLoading ||
    categoriesLoading
  ) {
    return (
      <div className="flex h-40 items-center justify-center">
        Loading...
      </div>
    );
  }

  // Statistics
  const totalUsers = users.length;

  const totalCustomers = users.filter(
    (user: any) => user.role === "CUSTOMER"
  ).length;

  const totalTechnicians = users.filter(
    (user: any) => user.role === "TECHNICIAN"
  ).length;

  const totalBookings = bookings.length;

  const totalCategories = categories.length;

  const totalRevenue = bookings.reduce(
    (sum: number, booking: any) =>
      sum +
      Number(booking.payment?.amount ?? 0),
    0
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your platform.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <DashboardCard
          title="Total Users"
          value={totalUsers}
          icon={<Users size={28} />}
        />

        <DashboardCard
          title="Customers"
          value={totalCustomers}
          icon={<User size={28} />}
        />

        <DashboardCard
          title="Technicians"
          value={totalTechnicians}
          icon={<UserCog size={28} />}
        />

        <DashboardCard
          title="Bookings"
          value={totalBookings}
          icon={<CalendarCheck size={28} />}
        />

        <DashboardCard
          title="Categories"
          value={totalCategories}
          icon={<FolderOpen size={28} />}
        />

        <DashboardCard
          title="Revenue"
          value={`৳ ${totalRevenue}`}
          icon={<Banknote size={28} />}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;