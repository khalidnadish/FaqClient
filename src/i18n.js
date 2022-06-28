import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import arLang from "./helper/locala/ar/translation.json";
import enLang from "./helper/locala/en/translation.json";

i18n

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "en",
    detection: ["cookie"],
    caches: ["cookie"],
    lng: "en",
    // cleanCode: true,
    // lowerCaseLng: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    resources: {
      en: {
        translation: enLang,
      },
      ar: {
        translation: arLang,
      },
    },
  });

export default i18n;
