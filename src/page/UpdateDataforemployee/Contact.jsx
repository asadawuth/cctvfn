import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import { useTranslation } from "react-i18next";
export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderMainMessage text={t("fileContact")} />
    </>
  );
}
