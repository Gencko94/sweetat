import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
const english = require("./locales/en/common.json");
const arabic = require("./locales/ar/common.json");
i18n

  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // debug: process.env.NODE_ENV === 'development',
    debug: false,
    detection: {
      order: [
        "localStorage",
        "querystring",
        "cookie",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
    },
    fallbackLng: "ar",
    defaultNS: "common",
    fallbackNS: "common",
    supportedLngs: ["ar", "en"],
    resources: {
      en: {
        common: english,
      },
      ar: {
        common: arabic,
      },
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    react: {
      useSuspense: false,
    },
  });
// i18n.addResourceBundle("en", "common", english);
// i18n.addResourceBundle("ar", "common", arabic);
export default i18n;
