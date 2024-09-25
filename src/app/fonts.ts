import localFont from "next/font/local";
import { Albert_Sans, Noto_Sans } from "next/font/google";

export const albertSans = Albert_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-albertSans",
  fallback: ["system-ui", "arial"],
  style: ["italic", "normal"],
});
export const notoSans = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["cyrillic"],
  variable: "--font-notoSans",
  display: "swap",
  adjustFontFallback: false,
});
