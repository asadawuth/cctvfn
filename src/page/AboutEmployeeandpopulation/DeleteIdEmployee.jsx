import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import DeleteIdEmployeeForm from "../../layoutcomponent/Aboutemployee&&population/DeleteIdEmployeeForm";
import { useTranslation } from "react-i18next";

export default function DeleteIdEmployee() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderMainMessage text={t("inconponentDeleteIdEmployee")} />
      <DeleteIdEmployeeForm />
    </>
  );
}
