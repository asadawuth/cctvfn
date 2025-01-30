import HeaderBeforeLogin from "../../layoutcomponent/HeaderFooter/HeaderBeforeLogin";
import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import VerifyOtpForm from "../../layoutcomponent/Beforelogin/VerifyOtpForm";
import Footer from "../../layoutcomponent/HeaderFooter/Footer";

export default function VevifyOtp() {
  return (
    <>
      <HeaderBeforeLogin />
      <HeaderMainMessage text="ระบุ Otp ที่ถูกต้อง" />
      <VerifyOtpForm />
      <Footer />
    </>
  );
}
