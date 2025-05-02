import { useState } from "react";
import HeaderMainMessage from "../layoutcomponent/HeaderMainMessage";
import Layout1IncludPole250 from "../layoutcomponent/DashboardAllValue/Layout1IncludPole250";
import Layout2IncludUserReport from "../layoutcomponent/DashboardAllValue/Layout2IncludUserReport";
import Layout3IncludUserShop from "../layoutcomponent/DashboardAllValue/Layout3IncludUserShop";
import Layout4UserRequest from "../layoutcomponent/DashboardAllValue/Layout4UserRequest";
import Layout5IncludUserRequestCctv from "../layoutcomponent/DashboardAllValue/Layout5IncludUserRequestCctv";
import Layout6InculdUserSos from "../layoutcomponent/DashboardAllValue/Layout6InculdUserSos";
import Layout7cctv from "../layoutcomponent/DashboardAllValue/Layout7cctv";
import LeftBar from "../layoutcomponent/DashboardAllValue/LeftBar";
import { useTranslation } from "react-i18next";

export default function DardboardAllVaule() {
  const { t } = useTranslation();
  const [leftOpen, setLeftOpen] = useState(true); // ค่าเริ่มต้นเปิด Sidebar
  const isOpenandClose = () => {
    setLeftOpen(!leftOpen);
  };

  return (
    <div className="tw-flex tw-h-screen tw-w-full tw-overflow-hidden">
      {/* Sidebar */}
      <div
        className={`tw-h-screen tw-transition-all tw-duration-300 ${
          leftOpen ? "tw-w-[200px]" : "tw-w-[50px]"
        }`}
      >
        <LeftBar leftOpen={leftOpen} isOpenandClose={isOpenandClose} />
      </div>

      {/* Content */}
      <div className="tw-flex-1 tw-overflow-auto tw-p-4">
        <HeaderMainMessage text={t("inconponentDardboardAllVaule")} />
        <hr className="tw-my-4" />

        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
          {/* คอลัมน์ซ้าย */}
          <div>
            <Layout2IncludUserReport />
            <Layout1IncludPole250 />
            <Layout7cctv />
          </div>

          {/* คอลัมน์ขวา */}
          <div>
            <Layout5IncludUserRequestCctv />
            <Layout6InculdUserSos />
            <Layout3IncludUserShop />
          </div>
        </div>

        {/* ส่วนล่าง */}
        <div className="tw-mt-4">
          <Layout4UserRequest />
        </div>
      </div>
    </div>
  );
}
