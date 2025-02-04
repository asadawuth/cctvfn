import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../logic/config/axios";
import LayoutText from "../../layoutcomponent/DashboardAllValue/LayoutText";

import LayoutInClud from "./LayoutInClud";

export default function Layout4UserRequest() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("/aboutshop/datatotalallstatus")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!data) {
    return (
      <div className="tw-flex tw-justify-center tw-items-center tw-h-screen">
        <span className="tw-text-blue-700 tw-font-semibold tw-text-lg">
          ไม่แสดงข้อมูล
        </span>
      </div>
    );
  }

  return (
    <>
      <LayoutText
        text={"สรุปจำนวณคำขอโปรโมท ร้านค้า/สถานที่/ที่พัก ของประชาชนในพื้นที่"}
      />
      <div
        className="tw-pt-2"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* PieChart วงที่ 1 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "300px",
          }}
        >
          <a
            href="pageaction-datareceived"
            className="hover:tw-text-blue-600 hover:tw-cursor-pointer tw-text-center tw-text-blue-400 tw-font-bold tw-text-lg tw-tracking-wide"
          >
            ส่งเรื่องแล้ว
          </a>
          <PieChart width={300} height={300}>
            <Pie
              data={[{ name: "สถานะ 1", value: data.totalStatusDocuments }]}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              <Cell fill="rgb(173, 216, 230)" /> {/* น้ำเงินอ่อน */}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* PieChart วงที่ 2 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "300px",
          }}
        >
          <a
            href="pageaction-datachecking"
            className="hover:tw-text-blue-600 hover:tw-cursor-pointer tw-text-center tw-text-blue-400 tw-font-bold tw-text-lg tw-tracking-wide"
          >
            กำลังเช็คเอกสาร
          </a>
          <PieChart width={300} height={300}>
            <Pie
              data={[{ name: "สถานะ 2", value: data.totalStatusChecking }]}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              <Cell fill="rgb(100, 149, 237)" /> {/* น้ำเงินกลาง */}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* PieChart วงที่ 3 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "300px",
          }}
        >
          <a
            href="pageaction-datarequestadditionaldocumentsdata"
            className="hover:tw-text-blue-600 hover:tw-cursor-pointer tw-text-center tw-text-blue-400 tw-font-bold tw-text-lg tw-tracking-wide"
          >
            ขอเอกสารเพิ่ม
          </a>
          <PieChart width={300} height={300}>
            <Pie
              data={[{ name: "สถานะ 3", value: data.totalStatusAdditional }]}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              <Cell fill="rgb(65, 105, 225)" /> {/* น้ำเงินเข้ม */}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* PieChart วงที่ 4 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "300px",
          }}
        >
          <a
            href="pageaction-completeddata"
            className="hover:tw-text-blue-600 hover:tw-cursor-pointer tw-text-center tw-text-blue-400 tw-font-bold tw-text-lg tw-tracking-wide"
          >
            สำเสร็จ
          </a>
          <PieChart width={300} height={300}>
            <Pie
              data={[{ name: "สถานะ 4", value: data.totalStatusSuccess }]}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              <Cell fill="rgb(30, 80, 190)" /> {/* น้ำเงินเข้มขึ้น */}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* PieChart วงที่ 5 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "300px",
          }}
        >
          <a
            href="pageaction-thedocumentdidnotpass"
            className="hover:tw-text-blue-600 hover:tw-cursor-pointer tw-text-center tw-text-blue-400 tw-font-bold tw-text-lg tw-tracking-wide"
          >
            ไม่ผ่าน
          </a>
          <PieChart width={300} height={300}>
            <Pie
              data={[{ name: "สถานะ 5", value: data.totalStatusNotPass }]}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              <Cell fill="rgb(0, 50, 130)" /> {/* น้ำเงินเข้มสุด */}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>

      <Link to="/report-request">
        <LayoutInClud
          text="ผลรวมเอกสารขอโปรโมทร้านต่างๆ"
          data={data.totalAllStatus}
        />
      </Link>
    </>
  );
}
