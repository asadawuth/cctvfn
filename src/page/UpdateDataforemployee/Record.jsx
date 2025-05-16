import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import { useTranslation } from "react-i18next";
import UpdateDateInputForm from "../../layoutcomponent/Updatedataforemployee/UpdateDateInputForm";
import DataUpdateForEmployee from "../../layoutcomponent/Updatedataforemployee/DataUpdateForEmployee";

export default function Record() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderMainMessage text={t("fileRecord")} />
      <UpdateDateInputForm />
      <DataUpdateForEmployee />
    </>
  );
}
