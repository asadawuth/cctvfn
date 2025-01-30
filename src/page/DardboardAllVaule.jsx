import HeaderMainMessage from "../layoutconponent/HeaderMainMessage";
import Layout1IncludPole250 from "../layoutconponent/DashboardAllValue/Layout1IncludPole250";
import Layout2IncludUserReport from "../layoutconponent/DashboardAllValue/Layout2IncludUserReport";
import Layout3IncludUserShop from "../layoutconponent/DashboardAllValue/Layout3IncludUserShop";
import Layout4UserRequest from "../layoutconponent/DashboardAllValue/Layout4UserRequest";
import Layout5IncludUserRequestCctv from "../layoutconponent/DashboardAllValue/Layout5IncludUserRequestCctv";
import Layout6InculdUserSos from "../layoutconponent/DashboardAllValue/Layout6InculdUserSos";
import LeftBar from "../layoutconponent/DashboardAllValue/LeftBar";
import { useState } from "react";
export default function DardboardAllVaule() {
  const [leftOpen, setLeftOpen] = useState(false); // ค่าเริ่มต้นเป็นเปิดอยู่

  const isOpenandClose = () => {
    setLeftOpen(!leftOpen);
  };
  return (
    <>
      <HeaderMainMessage text={"ตารางสรุปอุปกรณ์ค่าของทั้งหมดในเขต"} />
      <hr />
      <div className="tw-flex tw-w-full tw-flex-wrap md:tw-flex-nowrap xl:tw-w-full">
        {/* Sidebar (LeftBar) */}
        <div
          className={`tw-flex-none transition-all duration-300 ${
            leftOpen ? "tw-w-[280px]" : "tw-w-[50px]"
          }`}
        >
          <LeftBar leftOpen={leftOpen} isOpenandClose={isOpenandClose} />
        </div>

        {/* ส่วน Content Layout */}
        <div>
          <div
            className="tw-flex-1 tw-grid
              tw-grid-cols-1 md:tw-grid-cols-2 "
          >
            {/* Layout หลัก */}
            <div className="tw-w-full">
              <Layout2IncludUserReport />
              <Layout1IncludPole250 />
            </div>

            {/* CCTV และ SOS */}
            <div className="tw-w-full">
              <Layout5IncludUserRequestCctv className="xl:tw-w-full" />
              <Layout6InculdUserSos />
              <Layout3IncludUserShop />
            </div>
          </div>
          <div className="">
            <Layout4UserRequest />
          </div>
        </div>
      </div>
      {/* <Layout1IncludPole250 />
      <Layout3IncludUserShop />
      <Layout4UserRequest /> */}
    </>
  );
}
