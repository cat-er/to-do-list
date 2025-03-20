import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nStorageKeyEnum } from "@/types/enum/localStorage";
import cn from "./lang/cn";
import en from "./lang/en";

const resources = {
  en,
  cn
};

const defaultLng = localStorage.getItem(I18nStorageKeyEnum.LNG) || "cn";

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLng,
  fallbackLng: "cn", // 备用语言
  interpolation: { escapeValue: false }
});

export default i18n;
