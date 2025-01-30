import HeaderMainMessage from "../../layoutconponent/HeaderMainMessage";
import LayoutText from "../../layoutconponent/DashboardAllValue/LayoutText";
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
