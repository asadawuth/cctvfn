import { useTranslation } from "react-i18next";

export default function GoogleTranslateSwitcher({ className = "" }) {
  const { i18n } = useTranslation();

  return (
    <div className={`tw-flex tw-gap-2 tw-items-center tw-pl-4 ${className}`}>
      <button
        className="tw-bg-blue-200 tw-px-4 tw-py-1 tw-rounded"
        onClick={() => i18n.changeLanguage("th")}
      >
        Th
      </button>
      <button
        className="tw-bg-red-200 tw-px-4 tw-py-1 tw-rounded"
        onClick={() => i18n.changeLanguage("en")}
      >
        En
      </button>
    </div>
  );
}
