"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { createCategory } from "@/services/category/category.api";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCategory,

    onSuccess: () => {
      toast.success("Category created successfully");

      queryClient.invalidateQueries({
        queryKey: ["admin-categories"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to create category"
      );
    },
  });
};