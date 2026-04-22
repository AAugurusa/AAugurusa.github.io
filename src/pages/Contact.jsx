import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center text-center text-white">
      <div>
        <h1 className="font-impact text-5xl mb-4 tracking-[0.08em] uppercase">{t("contactPage.title")}</h1>
        <p className="text-lg opacity-70">{t("contactPage.subtitle")}</p>
      </div>
    </div>
  );
};

export default Contact;
