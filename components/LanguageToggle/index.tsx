import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n, ready } = useTranslation();

  function handleChangeLanguage(lng: "ar" | "en") {
    i18n.changeLanguage(lng);
  }
  return (
    <button
      onClick={() => {
        if (i18n.language === "ar") {
          handleChangeLanguage("en");
        } else {
          handleChangeLanguage("ar");
        }
      }}
    >
      {i18n.language === "ar" ? "EN" : "AR"}
    </button>
  );
};

export default LanguageToggle;
