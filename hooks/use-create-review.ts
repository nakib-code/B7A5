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

      queryClient.invalidateQueries({
        queryKey: ["my-bookings"],
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