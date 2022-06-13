import { t, useTranslation } from "react-i18next";
import cookie from "js-cookie";
export const ToggaleArabic = () => {
  const [i18n] = useTranslation();
  document.body.dir = "rtl";
  i18n.changeLanguage("ar");
  cookie.remove("i18next");
  cookie.set("i18next", "ar");
  return <></>;
};

export const ToggaleEnglish = () => {
  const [i18n] = useTranslation();

  i18n.changeLanguage("en");
  document.body.dir = "ltr";
  cookie.remove("i18next");
  cookie.set("i18next", "en");
  return <></>;
};
