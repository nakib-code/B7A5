import { jwtDecode } from "jwt-decode";

type JwtPayload = {
  id: string;
  email: string;
  role: "ADMIN" | "CUSTOMER" | "TECHNICIAN";
  exp: number;
};

export const decodeToken = (token: string) => {
  return jwtDecode<JwtPayload>(token);
};