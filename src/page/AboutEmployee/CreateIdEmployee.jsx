import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import CreateIdEmployeeForm from "../../layoutcomponent/Aboutemployee/CreateIdEmployeeForm";

export default function CreateIdEmployee() {
  return (
    <>
      <HeaderMainMessage text={"หน้าสร้างไอดีพนักงาน"} />
      <CreateIdEmployeeForm />
    </>
  );
}
