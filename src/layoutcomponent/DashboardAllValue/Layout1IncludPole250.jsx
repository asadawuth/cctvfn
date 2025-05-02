import { GiLightningFrequency } from "react-icons/gi";
import { TbCircuitVoltmeter } from "react-icons/tb";
import { FcElectricity } from "react-icons/fc";
import { GiPressureCooker } from "react-icons/gi";
import { BsFillLightbulbFill } from "react-icons/bs";
import { GiDustCloud } from "react-icons/gi";
import { GiWaterDrop } from "react-icons/gi";
import { TbTemperatureCelsius } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Layout1IncludPole250() {
  const { t } = useTranslation();
  const [data, setData] = useState();
  // console.log(data);
  return (
    <>
      {/* <LayoutText text={"สรุปค่าเฉลี่ยเสา250ต้น"} /> */}
      <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-4 tw-px-4 tw-p-4">
        <div className="tw-bg-blue-100 tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all ">
          <div className="tw-p-4 tw-text-center hover:tw-cursor-pointer">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              {t("Layout1IncludPole250Text1")} 27 C
            </h3>
            <div className="tw-flex tw-justify-center">
              <TbTemperatureCelsius className="tw-text-5xl tw-text-blue-700" />
            </div>
          </div>
        </div>
        <div className="tw-bg-blue-100 tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all">
          <div className="tw-p-4 tw-text-center hover:tw-cursor-pointer">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              {t("Layout1IncludPole250Text2")} 27
            </h3>
            <div className="tw-flex tw-justify-center">
              <GiWaterDrop className="tw-text-5xl tw-text-blue-700" />
            </div>
          </div>
        </div>
        <div className="tw-bg-sky-100 tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all">
          <div className="tw-p-4 tw-text-center hover:tw-cursor-pointer">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              {t("Layout1IncludPole250Text3")} 8.5
            </h3>
            <div className="tw-flex tw-justify-center">
              <GiDustCloud className="tw-text-5xl tw-text-blue-700" />
            </div>
          </div>
        </div>
        <div className="tw-bg-blue-100 tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all">
          <div className="tw-p-4 tw-text-center hover:tw-cursor-pointer">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              {t("Layout1IncludPole250Text4")} xx
            </h3>
            <div className="tw-flex tw-justify-center">
              <BsFillLightbulbFill className="tw-text-5xl tw-text-blue-700" />
            </div>
          </div>
        </div>
        <div className="tw-bg-blue-100 tw-rounded-lg tw-shadow-md  tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all">
          <div className="tw-p-4 tw-text-center hover:tw-cursor-pointer">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              {t("Layout1IncludPole250Text5")} xx
            </h3>
            <div className="tw-flex tw-justify-center">
              <GiPressureCooker className="tw-text-5xl tw-text-blue-700" />
            </div>
          </div>
        </div>
        <div className="tw-bg-blue-100 tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all">
          <div className="tw-p-4 tw-text-center hover:tw-cursor-pointer">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              {t("Layout1IncludPole250Text6")} xx
            </h3>
            <div className="tw-flex tw-justify-center">
              <FcElectricity className="tw-text-5xl tw-text-blue-700" />
            </div>
          </div>
        </div>
        <div className="tw-bg-blue-100 tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all">
          <div className="tw-p-4 tw-text-center hover:tw-cursor-pointer">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              {t("Layout1IncludPole250Text7")} xx
            </h3>
            <div className="tw-flex tw-justify-center">
              <TbCircuitVoltmeter className="tw-text-5xl tw-text-blue-700" />
            </div>
          </div>
        </div>
        <div className="tw-bg-blue-100 tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all">
          <div className="tw-p-4 tw-text-center hover:tw-cursor-pointer">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              {t("Layout1IncludPole250Text8")} xx
            </h3>
            <div className="tw-flex tw-justify-center">
              <GiLightningFrequency className="tw-text-5xl tw-text-blue-700" />
            </div>
          </div>
        </div>
      </div>

      <Link to="/pageaction-ploe250">
        <div className="tw-mt-2 tw-flex tw-justify-center tw-items-center tw-h-12 tw-bg-blue-100 hover:tw-bg-blue-200 tw-rounded-lg tw-mx-auto tw-mb-2 hover:tw-cursor-pointer">
          <span className="tw-text-blue-800 tw-text-lg tw-font-semibold">
            {t("Layout1IncludPole250Footer")}
          </span>
        </div>
      </Link>
    </>
  );
}
