import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n, ready } = useTranslation();

  function handleChangeLanguage(lng: "ar" | "en") {
    i18n.changeLanguage(lng);
  }
  return (
    <button
      style={{ color: "#fff" }}
      onClick={() => {
        if (i18n.language === "ar") {
          handleChangeLanguage("en");
          document.documentElement.setAttribute("dir", "ltr");
          document.documentElement.setAttribute("lang", "en");
        } else {
          handleChangeLanguage("ar");
          document.documentElement.setAttribute("lang", "ar");
          document.documentElement.setAttribute("dir", "rtl");
        }
      }}
    >
      {ready && i18n.language === "ar" ? "English" : "عربي"}
    </button>
  );
};

export default LanguageToggle;
