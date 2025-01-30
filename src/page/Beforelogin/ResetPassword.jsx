import HeaderBeforeLogin from "../../layoutcomponent/HeaderFooter/HeaderBeforeLogin";
import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import ResetPasswordForm from "../../layoutcomponent/Beforelogin/ResetPasswordForm";
import Footer from "../../layoutcomponent/HeaderFooter/Footer";

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
