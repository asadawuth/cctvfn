import HeaderBeforeLogin from "../../layoutcomponent/HeaderFooter/HeaderBeforeLogin";
import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import LoginForm from "../../layoutcomponent/Beforelogin/LoginForm";
import Footer from "../../layoutcomponent/HeaderFooter/Footer";

export default function Login() {
  return (
    <>
      <HeaderBeforeLogin />
      <HeaderMainMessage text="เข้าสู้ระบบของพนักงาน" />
      <LoginForm />
      <Footer />
    </>
  );
}
