import {defineRouting} from "next-intl/routing";

export const routing = defineRouting({
  locales: ["it", "en", "es", "fr", "de", "pt"],
  defaultLocale: "it",
})