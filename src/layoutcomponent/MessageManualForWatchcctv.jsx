import { useTranslation } from "react-i18next";

export default function MessageManualForWatchcctv() {
  const { t } = useTranslation();
  return (
    <>
      <hr />
      <div className="tw-text-red-500">
        <h1>{t("MessageManualForWatchcctvText1")}</h1>
        <h1>{t("MessageManualForWatchcctvText2")}</h1>
        <h1>{t("MessageManualForWatchcctvText3")}</h1>
      </div>
    </>
  );
}
