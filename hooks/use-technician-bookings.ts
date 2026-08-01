"use client";

import { getTechnicianBookings } from "@/services/technician/technician.api";
import { useQuery } from "@tanstack/react-query";


export const useTechnicianBookings = () => {
  return useQuery({
    queryKey: ["technician-bookings"],
    queryFn: getTechnicianBookings,
  });
};