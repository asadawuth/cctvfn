import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import { useTranslation } from "react-i18next";
import UpdateDateInputForm from "../../layoutcomponent/Updatedataforemployee/UpdateDateInputForm";
import DataUpdateForEmployee from "../../layoutcomponent/Updatedataforemployee/DataUpdateForEmployee";

export default function Vision2() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderMainMessage text={t("fileVision2")} />
      <UpdateDateInputForm />
      <DataUpdateForEmployee />
    </>
  );
}
