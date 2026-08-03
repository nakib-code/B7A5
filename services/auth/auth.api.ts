import { axiosInstance } from "@/lib/axios";
import {
  LoginValues,
  RegisterValues,
} from "@/schemas/auth.schema";


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
  payload: RegisterValues
) => {

  const { data } = await axiosInstance.post(
    "/auth/register",
    payload
  );

  return data;
};


export const getCurrentUser = async () => {
  const { data } = await axiosInstance.get(
    "/auth/me"
  );

  return data.data;
};

export const logoutUser = async () => {
  const { data } = await axiosInstance.post(
    "/auth/logout"
  );

  return data;
};