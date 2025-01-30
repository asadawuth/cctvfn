import HeaderMainMessage from "../../layoutconponent/HeaderMainMessage";
import CreateIdEmployeeForm from "../../layoutconponent/Aboutemployee/CreateIdEmployeeForm";

export default function CreateIdEmployee() {
  return (
    <>
      <HeaderMainMessage text={"หน้าสร้างไอดีพนักงาน"} />
      <CreateIdEmployeeForm />
    </>
  );
}
