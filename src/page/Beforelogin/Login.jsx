import HeaderBeforeLogin from "./../../layoutconponent/HeaderFooter/HeaderBeforeLogin";
import HeaderMainMessage from "../../layoutconponent/HeaderMainMessage";
import LoginForm from "../../layoutconponent/Beforelogin/LoginForm";
import Footer from "../../layoutconponent/HeaderFooter/Footer";

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
