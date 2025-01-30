import HeaderMainMessage from "../layoutcomponent/HeaderMainMessage";
import Layoutone from "../layoutcomponent/ProblemSoftwareHardware/Layoutone";
import LayoutTwoMap from "../layoutcomponent/ProblemSoftwareHardware/LayoutTwoMap";
import LayoutThreeContactTeamDevIt from "../layoutcomponent/ProblemSoftwareHardware/LayoutThreeContactTeamDevIt";
export default function ProblemSoftwareHardware() {
  return (
    <>
      <HeaderMainMessage
        text={"ข้อมูลติดต่อเมื่อระบบหรืออุปกรณ์ต่างๆเกิดปัญหา"}
      />
      <Layoutone />
      <LayoutTwoMap />
      <LayoutThreeContactTeamDevIt />
    </>
  );
}
