import HeaderBeforeLogin from "../../layoutconponent/HeaderFooter/HeaderBeforeLogin";
import HeaderMainMessage from "../../layoutconponent/HeaderMainMessage";
import VerifyOtpForm from "../../layoutconponent/Beforelogin/VerifyOtpForm";
import Footer from "../../layoutconponent/HeaderFooter/Footer";

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
