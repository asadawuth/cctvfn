import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en.json";
import th from "./th.json";

i18n
  .use(LanguageDetector) // ใช้ตรวจจับอัตโนมัติ localStorage, navigator.language
  .use(initReactI18next) // react-i18next
  .init({
    fallbackLng: "th", // ค่าตั้งต้น
    debug: true, // // ใช้ debug mode (log ข้อมูลตอนพัฒนา) → ปิดตอน production
    interpolation: {
      escapeValue: false, // ปิด escape เพื่อให้ใส่ HTML ได้ถ้าจำเป็น
    },
    resources: {
      en: { translation: en }, // Eng ที่เรา config
      th: { translation: th }, // ไทย ที่เรา config
    },
  });

export default i18n;
