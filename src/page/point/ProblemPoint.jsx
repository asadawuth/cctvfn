import HeaderMainMessage from "../../layoutcomponent/HeaderMainMessage";
import LayoutText from "../../layoutcomponent/DashboardAllValue/LayoutText";
import { useState, useEffect } from "react";
export default function ProblemPoint() {
  const [data, setData] = useState([]);
  useEffect(() => {}, []);
  return (
    <>
      <HeaderMainMessage text={"จุดที่อุปกรณ์ต่างๆมีปัญหา"} />
      <LayoutText text="ข้อมูลเสาที่ชำรุด" style="tw-text-xl" />
      <LayoutText text="ข้อมูลกล้องที่ชำรุด" style="tw-text-xl" />
    </>
  );
}
