import HeaderBeforeLogin from "../../layoutcomponent/HeaderFooter/HeaderBeforeLogin";
import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import VevifyEmailForm from "../../layoutcomponent/Beforelogin/VevifyEmailForm";
import Footer from "../../layoutcomponent/HeaderFooter/Footer";

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
