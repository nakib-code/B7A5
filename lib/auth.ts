import axiosInstance from "@/lib/axios";
import { LoginValues, RegisterSchema } from "@/schemas/auth.schema";
import Cookies from "js-cookie";

export const setTokens = (
  accessToken: string,
  refreshToken: string
) => {
  Cookies.set("accessToken", accessToken, {
    expires: 7,
  });

  Cookies.set("refreshToken", refreshToken, {
    expires: 30,
  });
};

export const logout = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};


export const loginUser = async (
  payload: LoginValues
) => {
  const { data } = await axiosInstance.post(
    "/auth/login",
    payload
  );

  return data;
};

export const registerUser = async (
  payload: RegisterSchema
) => {
  const { data } = await axiosInstance.post(
    "/auth/register",
    payload
  );

  return data;
};