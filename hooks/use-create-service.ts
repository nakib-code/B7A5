"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createService } from "@/services/services/service.api";

export const useCreateService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createService,

    onSuccess: () => {
      toast.success("Service created successfully");

      queryClient.invalidateQueries({
        queryKey: ["my-services"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to create service"
      );
    },
  });
};