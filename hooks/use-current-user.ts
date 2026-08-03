"use client";

import { getCurrentUser } from "@/services/auth/auth.api";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["current-user"],
    queryFn: getCurrentUser,
    retry: false,
    staleTime: 0,
  });

  return {
    user: data,
    isLoading,
    isError,
    refetch,
  };
};