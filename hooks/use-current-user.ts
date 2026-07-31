"use client";

import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "@/services/auth/auth.api";

export const useCurrentUser = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["current-user"],
    queryFn: getCurrentUser,
    retry: false,
  });

  return {
    user: data,
    isLoading,
    isError,
  };
};