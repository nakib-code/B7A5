"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllBookings } from "@/services/admin/admin.api";

export const useAdminBookings = () => {
  return useQuery({
    queryKey: ["admin-bookings"],
    queryFn: getAllBookings,
  });
};