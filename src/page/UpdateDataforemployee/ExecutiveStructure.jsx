import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import { useTranslation } from "react-i18next";
export default function ExecutiveStructure() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderMainMessage text={t("fileExecutiveStructure")} />
    </>
  );
}
