"use client";

import { useMemo } from "react";
import Cookies from "js-cookie";
import { decodeToken } from "@/lib/decode-token";

export function useCurrentUser() {
  return useMemo(() => {
    const token = Cookies.get("accessToken");

    if (!token) return null;

    return decodeToken(token);
  }, []);
}