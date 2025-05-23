import { BsFillCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "../../logic/config/axios";
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
} from "victory";
import { useTranslation } from "react-i18next";

export default function Layout2IncludUserReport() {
  const { t } = useTranslation();
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
                      {
                        x: t("status1"),
                        y: totalUserReportStatus.reported || 0,
                      },
                      {
                        x: t("status2"),
                        y: totalUserReportStatus.acknowledged || 0,
                      },
                      {
                        x: t("status3"),
                        y: totalUserReportStatus.inProgress || 0,
                      },
                      {
                        x: t("status4"),
                        y: totalUserReportStatus.completed || 0,
                      },
                      {
                        x: t("status5"),
                        y: totalUserReportStatus.canceled || 0,
                      },
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
              {t("Layout2InculdUserReport")}
            </p>

            <div className="tw-flex tw-items-center tw-pt-2">
              <BsFillCircleFill className="tw-text-red-500" />
              <a
                href="userreportstatus"
                className="tw-ml-2 tw-text-sm md:tw-text-base xl:tw-text-lg tw-font-medium tw-text-gray-600 hover:tw-cursor-pointer hover:tw-text-blue-600"
              >
                {t("status1")}
              </a>
            </div>
            <div className="tw-flex tw-items-center tw-pt-2">
              <BsFillCircleFill className="tw-text-orange-500" />
              <a
                href="userreportstatusacknowled"
                className="tw-ml-2 tw-text-sm md:tw-text-base xl:tw-text-lg tw-font-medium tw-text-gray-600 hover:tw-cursor-pointer hover:tw-text-blue-600"
              >
                {t("status2")}
              </a>
            </div>
            <div className="tw-flex tw-items-center tw-pt-2">
              <BsFillCircleFill className="tw-text-yellow-500" />
              <a
                href="userreportstatusinprogress"
                className="tw-ml-2 tw-text-sm md:tw-text-base xl:tw-text-lg tw-font-medium tw-text-gray-600 hover:tw-cursor-pointer hover:tw-text-blue-600"
              >
                {t("status3")}
              </a>
            </div>
            <div className="tw-flex tw-items-center tw-pt-2">
              <BsFillCircleFill className="tw-text-green-500" />
              <a
                href="userreportstatuscompletedonly"
                className="tw-ml-2 tw-text-sm md:tw-text-base xl:tw-text-lg tw-font-medium tw-text-gray-600 hover:tw-cursor-pointer hover:tw-text-blue-600"
              >
                {t("status4")}
              </a>
            </div>
            <div className="tw-flex tw-items-center tw-pt-2">
              <BsFillCircleFill className="tw-text-gray-500" />
              <a
                href="userreportstatuscompleted"
                className="tw-ml-2 tw-text-sm md:tw-text-base xl:tw-text-lg tw-font-medium tw-text-gray-600 hover:tw-cursor-pointer hover:tw-text-blue-600"
              >
                {t("status5")}
              </a>
            </div>
            <div className="tw-flex tw-items-center tw-pt-2">
              <BsFillCircleFill className="tw-text-blue-700" />
              <a
                href="/userReport"
                className="tw-ml-2 tw-text-sm md:tw-text-base xl:tw-text-lg tw-font-medium tw-text-gray-600 hover:tw-cursor-pointer hover:tw-text-blue-600"
              >
                {t("Total")} {totalUserReportStatus.allStatus}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
