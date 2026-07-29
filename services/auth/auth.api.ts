import { axiosInstance } from "@/lib/axios";
import {
  ApiResponse,
  LoginPayload,
  LoginResponse,
  RegisterPayload,
} from "./auth.types";

export const loginUser = async (
  payload: LoginPayload
): Promise<ApiResponse<LoginResponse>> => {
  const { data } = await axiosInstance.post("/auth/login", payload);

  return data;
};

export const registerUser = async (
  payload: RegisterPayload
) => {
  const { data } = await axiosInstance.post(
    "/auth/register",
    payload
  );

  return data;
};

export const getCurrentUser = async () => {
  const { data } = await axiosInstance.get("/auth/me");

  return data;
};