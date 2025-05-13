import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import { useTranslation } from "react-i18next";

export default function Vision2() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderMainMessage text={t("fileVision2")} />
    </>
  );
}
