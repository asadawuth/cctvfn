import HeaderBeforeLogin from "./../../layoutconponent/HeaderFooter/HeaderBeforeLogin";
import HeaderMainMessage from "../../layoutconponent/HeaderMainMessage";
import VevifyEmailForm from "../../layoutconponent/Beforelogin/VevifyEmailForm";
import Footer from "../../layoutconponent/HeaderFooter/Footer";

export default function VevifyEmail() {
  return (
    <>
      <HeaderBeforeLogin />
      <HeaderMainMessage text="กรองอีเมลล์" />
      <VevifyEmailForm />
      <Footer />
    </>
  );
}
