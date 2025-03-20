import { useTranslation } from "react-i18next";
import { I18nEnum } from "../enums";
import { I18nStorageKeyEnum } from "@/types/enum/localStorage";

export interface UseChangeLngType {
  language: string;
  changeLng: (lng: I18nEnum) => void;
}

export const useChangeLng = (): UseChangeLngType => {
  const { i18n } = useTranslation();
  const { changeLanguage, language } = i18n;

  const changeLng = (lng: I18nEnum) => {
    changeLanguage(lng);
    localStorage.setItem(I18nStorageKeyEnum.LNG, lng); // 将当前语言保存到localStorage
  };

  return { language, changeLng };
};
