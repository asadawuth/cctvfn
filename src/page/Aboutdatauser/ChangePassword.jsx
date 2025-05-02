import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import ChangePasswordForm from "../../layoutcomponent/foraboutdatauser/ChangePasswordForm";
import { useTranslation } from "react-i18next";

export default function ChangePassword() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderMainMessage text={t("ChangePasswordTitle")} />
      <ChangePasswordForm />
    </>
  );
}
