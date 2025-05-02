import ChangeEmailForm from "../../layoutcomponent/foraboutdatauser/ChangeEmailForm";
import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import { useTranslation } from "react-i18next";

export default function ChangeEmail() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderMainMessage text={t("ChangeEmailFormText1")} />
      <ChangeEmailForm />
    </>
  );
}
