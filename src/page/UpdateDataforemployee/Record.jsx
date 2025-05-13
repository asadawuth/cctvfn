import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import { useTranslation } from "react-i18next";

export default function Record() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderMainMessage text={t("fileRecord")} />
    </>
  );
}
