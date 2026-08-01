"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Briefcase,
  CalendarCheck,
  CheckCircle,
  Clock3,
  LoaderCircle,
  Wrench,
} from "lucide-react";


import { getMyServices, getTechnicianBookings } from "@/services/services/service.api";
import DashboardCard from "@/app/dashboard/technician/_components/DashboardCard";
import RecentBookings from "@/app/dashboard/technician/_components/RecentBookings";
import RecentServices from "@/app/dashboard/technician/_components/RecentServices";



const TechnicianDashboard = () => {
  const { data: services = [], isLoading: servicesLoading } = useQuery({
    queryKey: ["my-services"],
    queryFn: getMyServices,
  });

  const { data: bookings = [], isLoading: bookingsLoading } = useQuery({
    queryKey: ["technician-bookings"],
    queryFn: getTechnicianBookings,
  });

  if (servicesLoading || bookingsLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        Loading...
      </div>
    );
  }

  const totalServices = services.length;

  const availableServices = services.filter(
    (item: any) => item.isAvailable
  ).length;

  const totalBookings = bookings.length;

  const pendingBookings = bookings.filter(
    (item: any) => item.status === "PENDING"
  ).length;

  const inProgressBookings = bookings.filter(
    (item: any) => item.status === "IN_PROGRESS"
  ).length;

  const completedBookings = bookings.filter(
    (item: any) => item.status === "COMPLETED"
  ).length;

  const recentBookings = bookings.slice(0, 5);

  const recentServices = services.slice(0, 5);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-muted-foreground">
          Here&apos;s what&apos;s happening today.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <DashboardCard
          title="Total Services"
          value={totalServices}
          icon={<Briefcase size={28} />}
        />

        <DashboardCard
          title="Available Services"
          value={availableServices}
          icon={<Wrench size={28} />}
        />

        <DashboardCard
          title="Total Bookings"
          value={totalBookings}
          icon={<CalendarCheck size={28} />}
        />

        <DashboardCard
          title="Pending Jobs"
          value={pendingBookings}
          icon={<Clock3 size={28} />}
        />

        <DashboardCard
          title="In Progress"
          value={inProgressBookings}
          icon={<LoaderCircle size={28} />}
        />

        <DashboardCard
          title="Completed Jobs"
          value={completedBookings}
          icon={<CheckCircle size={28} />}
        />
      </div>

      <RecentBookings bookings={recentBookings} />

      <RecentServices services={recentServices} />
    </div>
  );
};

export default TechnicianDashboard;