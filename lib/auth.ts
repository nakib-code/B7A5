import Cookies from "js-cookie";
import { AUTH_TOKEN, REFRESH_TOKEN } from "@/constants/auth";

export const setTokens = (
  accessToken: string,
  refreshToken: string
) => {
  Cookies.set(AUTH_TOKEN, accessToken, {
    expires: 7,
    sameSite: "lax",
  });

  Cookies.set(REFRESH_TOKEN, refreshToken, {
    expires: 30,
    sameSite: "lax",
  });
};

export const clearTokens = () => {
  Cookies.remove(AUTH_TOKEN);
  Cookies.remove(REFRESH_TOKEN);
};

export const getToken = () => {
  return Cookies.get(AUTH_TOKEN);
};