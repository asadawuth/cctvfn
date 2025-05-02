import HeaderBeforeLogin from "../../layoutcomponent/HeaderFooter/HeaderBeforeLogin";
import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import ResetPasswordForm from "../../layoutcomponent/Beforelogin/ResetPasswordForm";
import Footer from "../../layoutcomponent/HeaderFooter/Footer";
import GoogleTranslateSwitcher from "../../layoutcomponent/GoogleTranslateSwitcher";
import { useTranslation } from "react-i18next";

export default function ResetPassword() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderBeforeLogin />
      <HeaderMainMessage text={t("ResetPasswordTitle")} />
      <ResetPasswordForm />
      <GoogleTranslateSwitcher className="tw-bg-gray-100 tw-flex tw-justify-center tw-p-2" />
      <Footer />
    </>
  );
}
