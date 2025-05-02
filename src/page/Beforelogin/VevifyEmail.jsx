import HeaderBeforeLogin from "../../layoutcomponent/HeaderFooter/HeaderBeforeLogin";
import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import VevifyEmailForm from "../../layoutcomponent/Beforelogin/VevifyEmailForm";
import GoogleTranslateSwitcher from "../../layoutcomponent/GoogleTranslateSwitcher";
import Footer from "../../layoutcomponent/HeaderFooter/Footer";
import { useTranslation } from "react-i18next";

export default function VevifyEmail() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderBeforeLogin />
      <HeaderMainMessage text={t("VevifyEmail")} />
      <VevifyEmailForm />
      <GoogleTranslateSwitcher className="tw-bg-gray-100 tw-flex tw-justify-center tw-p-2" />
      <Footer />
    </>
  );
}
