"use client";

import { useQuery } from "@tanstack/react-query";

import { getTechnicianBookings } from "@/services/technician/technician.api";
import { IBooking } from "@/types/booking";

export const useTechnicianBookings = () => {
  return useQuery<IBooking[]>({
    queryKey: ["technician-bookings"],
    queryFn: getTechnicianBookings,
    staleTime: 0,
  });
};