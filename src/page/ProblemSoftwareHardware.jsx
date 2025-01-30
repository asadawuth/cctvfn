import HeaderMainMessage from "./../layoutconponent/HeaderMainMessage";
import Layoutone from "../layoutconponent/ProblemSoftwareHardware/Layoutone";
import LayoutTwoMap from "../layoutconponent/ProblemSoftwareHardware/LayoutTwoMap";
import LayoutThreeContactTeamDevIt from "../layoutconponent/ProblemSoftwareHardware/LayoutThreeContactTeamDevIt";
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
