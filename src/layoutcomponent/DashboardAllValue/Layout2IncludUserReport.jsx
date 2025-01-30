import { BsFillCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import LayoutInClud from "./LayoutInClud";
import axios from "../../logic/config/axios";
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
} from "victory";
import LayoutText from "../../layoutcomponent/DashboardAllValue/LayoutText";

export default function Layout2IncludUserReport() {
  const [totalUserReportStatus, setTotalUserReportStatus] = useState({});

  useEffect(() => {
    axios
      .get(`/boardreport/countallstatusreport`)
      .then((res) => {
        const defaultStatus = {
          reported: 0,
          acknowledged: 0,
          inProgress: 0,
          completed: 0,
          canceled: 0,
          allStatus: 0,
        };

        // รวมค่า Default เพื่อป้องกัน undefined
        const cleanData = { ...defaultStatus, ...res.data };
        setTotalUserReportStatus(cleanData);
      })
      .catch((err) => {
        console.log(err);
        setTotalUserReportStatus({
          reported: 0,
          acknowledged: 0,
          inProgress: 0,
          completed: 0,
          canceled: 0,
          allStatus: 0,
        });
      });
  }, []);

  return (
    <>
      {/* <LayoutText text={"สรุปจำนวนโพสประชาชนในพื้นที่ร้องเรียน"} /> */}
      <div className="tw-flex tw-flex-col md:tw-flex-row tw-w-full tw-h-auto lg:tw-h-[54vh]">
        <div className="tw-w-full md:tw-w-1/2 xl:tw-w-[60%] tw-p-4 tw-mx-auto">
          <VictoryChart
            domainPadding={{ x: 50 }}
            theme={VictoryTheme.material}
            padding={{ top: 50, bottom: 70, left: 50, right: 50 }}
            className="tw-pt-2"
            style={{
              parent: {
                maxWidth: "100%",
                height: "100%",
                // background: "#f8f9fa",
              },
            }}
          >
            <VictoryAxis
              tickLabelComponent={
                <VictoryLabel
                  angle={-30}
                  textAnchor="middle"
                  style={{ fontSize: 10 }} // ลดขนาดตัวอักษร
                />
              }
            />
            <VictoryAxis
              dependentAxis
              style={{ tickLabels: { fontSize: 10 } }}
            />
            <VictoryBar
              data={
                totalUserReportStatus
                  ? [
                      { x: "แจ้ง", y: totalUserReportStatus.reported || 0 },
                      {
                        x: "รับแจ้งแล้ว",
                        y: totalUserReportStatus.acknowledged || 0,
                      },
                      {
                        x: "กำลังดำเนินการ",
                        y: totalUserReportStatus.inProgress || 0,
                      },
                      {
                        x: "จัดการเสร็จสิ้น",
                        y: totalUserReportStatus.completed || 0,
                      },
                      { x: "ยกเลิก", y: totalUserReportStatus.canceled || 0 },
                    ]
                  : []
              }
              style={{
                data: { fill: "#4F46E5", width: 40 },
              }}
              labels={({ datum }) => datum.y}
              labelComponent={<VictoryLabel dy={-10} />}
            />
          </VictoryChart>
        </div>
        <div className="tw-w-full md:tw-w-1/2 xl:tw-w-[40%]  tw-flex tw-items-center">
          <div className="tw-pt-4">
            <p className="sm:tw-text-sm md:tw-text-lg xl:tw-text-2xl tw-font-bold tw-text-gray-600">
              สรุปจำนวนการร้องเรียน
            </p>

            <div className="tw-flex tw-items-center tw-pt-2">
              <BsFillCircleFill className="tw-text-red-500" />
              <a
                href="userreportstatus"
                className="tw-ml-2 tw-text-sm md:tw-text-base xl:tw-text-lg tw-font-medium tw-text-gray-600 hover:tw-cursor-pointer hover:tw-text-blue-600"
              >
                แจ้ง
              </a>
            </div>
            <div className="tw-flex tw-items-center tw-pt-2">
              <BsFillCircleFill className="tw-text-orange-500" />
              <a
                href="userreportstatusacknowled"
                className="tw-ml-2 tw-text-sm md:tw-text-base xl:tw-text-lg tw-font-medium tw-text-gray-600 hover:tw-cursor-pointer hover:tw-text-blue-600"
              >
                รับแจ้งแล้ว
              </a>
            </div>
            <div className="tw-flex tw-items-center tw-pt-2">
              <BsFillCircleFill className="tw-text-yellow-500" />
              <a
                href="userreportstatusinprogress"
                className="tw-ml-2 tw-text-sm md:tw-text-base xl:tw-text-lg tw-font-medium tw-text-gray-600 hover:tw-cursor-pointer hover:tw-text-blue-600"
              >
                กำลังดำเนินการ
              </a>
            </div>
            <div className="tw-flex tw-items-center tw-pt-2">
              <BsFillCircleFill className="tw-text-green-500" />
              <a
                href="userreportstatuscompletedonly"
                className="tw-ml-2 tw-text-sm md:tw-text-base xl:tw-text-lg tw-font-medium tw-text-gray-600 hover:tw-cursor-pointer hover:tw-text-blue-600"
              >
                จัดการเสร็จสิ้น
              </a>
            </div>
            <div className="tw-flex tw-items-center tw-pt-2">
              <BsFillCircleFill className="tw-text-gray-500" />
              <a
                href="userreportstatuscompleted"
                className="tw-ml-2 tw-text-sm md:tw-text-base xl:tw-text-lg tw-font-medium tw-text-gray-600 hover:tw-cursor-pointer hover:tw-text-blue-600"
              >
                ยกเลิก
              </a>
            </div>
            <div className="tw-flex tw-items-center tw-pt-2">
              <BsFillCircleFill className="tw-text-blue-700" />
              <a
                href="/userReport"
                className="tw-ml-2 tw-text-sm md:tw-text-base xl:tw-text-lg tw-font-medium tw-text-gray-600 hover:tw-cursor-pointer hover:tw-text-blue-600"
              >
                รวม {totalUserReportStatus.allStatus}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <LayoutInClud
        text="ผลรวมทุกสถานะ"
        data={totalUserReportStatus.allStatus}
      /> */}
    </>
  );
}
