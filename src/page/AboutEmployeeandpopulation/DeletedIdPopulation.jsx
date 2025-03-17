import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import DeletedIdPopulationForm from "../../layoutcomponent/Aboutemployee&&population/DeletedIdPopulationForm";

export default function DeletedIdPopulation() {
  return (
    <>
      <HeaderMainMessage text="ลบไอดีประชาชนที่สร้างปัญหาในระบบ" />
      <DeletedIdPopulationForm />
    </>
  );
}
