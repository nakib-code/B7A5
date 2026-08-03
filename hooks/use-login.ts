"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { loginUser } from "@/services/auth/auth.api";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,

    onSuccess: (data) => {
      toast.success("Login successful");

      // Current user refresh
      queryClient.invalidateQueries({
        queryKey: ["current-user"],
      });

      // চাইলে এখানে user cache set করতে পারো
      queryClient.setQueryData(
        ["current-user"],
        data.data.user
      );
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Login failed"
      );
    },
  });
};