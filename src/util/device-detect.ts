"use client";
import { headers } from "next/headers";

const userAgent = headers().get("user-agent") || "";
export const mobileCheck = (userAgent: string): boolean => {
  return /android.+mobile|ip(hone|[oa]d)/i.test(userAgent);
};
export const isMobile = mobileCheck(userAgent);
