import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import CreateIdEmployeeForm from "../../layoutcomponent/Aboutemployee&&population/CreateIdEmployeeForm";
import { useTranslation } from "react-i18next";

export default function CreateIdEmployee() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderMainMessage text={t("createIdEmploy")} />
      <CreateIdEmployeeForm />
    </>
  );
}
