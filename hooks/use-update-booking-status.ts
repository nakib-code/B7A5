"use client";

import { updateBookingStatus } from "@/services/technician/technician.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";


export const useUpdateBookingStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBookingStatus,

    onSuccess: () => {
      toast.success("Booking status updated");

      queryClient.invalidateQueries({
        queryKey: ["technician-bookings"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to update booking status"
      );
    },
  });
};