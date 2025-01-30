import HeaderMainMessage from "../../layoutconponent/HeaderMainMessage";
import DeleteIdEmployeeForm from "../../layoutconponent/Aboutemployee/DeleteIdEmployeeForm";
export default function DeleteIdEmployee() {
  return (
    <>
      <HeaderMainMessage
        text=" *** เนื่องจากพนักงานที่พ้นสภาพหรือลาออกไปแล้ว
          ผู้ดูแลระบบต้องลบไอดีของพนักงานนั้นๆ
          เพื่อไม่ให้ข้อมูลองค์กรรั่วไหลจากบุคคลภายนอก ***"
      />
      <DeleteIdEmployeeForm />
    </>
  );
}
