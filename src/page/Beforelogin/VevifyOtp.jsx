import HeaderBeforeLogin from "../../layoutcomponent/HeaderFooter/HeaderBeforeLogin";
import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import VerifyOtpForm from "../../layoutcomponent/Beforelogin/VerifyOtpForm";
import Footer from "../../layoutcomponent/HeaderFooter/Footer";
import { useTranslation } from "react-i18next";
import GoogleTranslateSwitcher from "../../layoutcomponent/GoogleTranslateSwitcher";

export default function VevifyOtp() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderBeforeLogin />
      <HeaderMainMessage text={t("VevifyOtpTitle")} />
      <VerifyOtpForm />
      <GoogleTranslateSwitcher className="tw-bg-gray-100 tw-flex tw-justify-center tw-p-2" />
      <Footer />
    </>
  );
}
