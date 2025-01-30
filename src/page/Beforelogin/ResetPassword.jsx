import HeaderBeforeLogin from "./../../layoutconponent/HeaderFooter/HeaderBeforeLogin";
import HeaderMainMessage from "../../layoutconponent/HeaderMainMessage";
import ResetPasswordForm from "../../layoutconponent/Beforelogin/ResetPasswordForm";
import Footer from "../../layoutconponent/HeaderFooter/Footer";
export default function ResetPassword() {
  return (
    <>
      <HeaderBeforeLogin />
      <HeaderMainMessage text="ยืนยันรหัสผ่านใหม่" />
      <ResetPasswordForm />
      <Footer />
    </>
  );
}
