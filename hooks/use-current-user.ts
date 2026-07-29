"use client";


import Cookies from "js-cookie";
import { decodeToken } from "@/lib/decode-token";


export function useCurrentUser() {

  const token = Cookies.get(
    "accessToken"
  );


  if (!token) {
    return null;
  }


  return decodeToken(token);
}