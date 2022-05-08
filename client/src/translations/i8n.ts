import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";

const resources = {
  en,
};

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources,
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
