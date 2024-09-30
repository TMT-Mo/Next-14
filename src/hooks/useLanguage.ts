import { LocaleAvailable, usePathname, useRouter } from "@/i18n/routing";
import { useCookies } from "next-client-cookies";

export const useLanguage = () => {
  const pathname = usePathname(); // Gets current path
  const router = useRouter();
  const cookies = useCookies();

  const onSelectLanguage = (localeInput: LocaleAvailable) => {
    router.replace(pathname, { locale: localeInput });
  };

  const getCurrentLocale = (): LocaleAvailable => {
    return cookies.get("NEXT_LOCALE") as LocaleAvailable;
  };

  return {
    onSelectLanguage,
    currentLocale: getCurrentLocale(),
  };
};
