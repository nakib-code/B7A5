import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/services/auth/auth.api";

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};