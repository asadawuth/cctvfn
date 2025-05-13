import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import { useTranslation } from "react-i18next";
export default function Infrastructure() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderMainMessage text={t("fileInfrastructure")} />
    </>
  );
}
