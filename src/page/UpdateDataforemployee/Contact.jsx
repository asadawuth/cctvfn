import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import { useTranslation } from "react-i18next";
import UpdateDateInputForm from "../../layoutcomponent/Updatedataforemployee/UpdateDateInputForm";
import DataUpdateForEmployee from "../../layoutcomponent/Updatedataforemployee/DataUpdateForEmployee";
export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderMainMessage text={t("fileContact")} />
      <UpdateDateInputForm />
      <DataUpdateForEmployee />
    </>
  );
}
