"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  createReview,
  TCreateReview,
} from "@/services/review/review.api";

export const useCreateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: TCreateReview) =>
      createReview(payload),

    onSuccess: () => {
      toast.success("Review submitted successfully.");

      // Customer booking list update
      queryClient.invalidateQueries({
        queryKey: ["my-bookings"],
      });

      // যদি admin review list থাকে
      queryClient.invalidateQueries({
        queryKey: ["admin-bookings"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to submit review"
      );
    },
  });
};