import { useTranslation } from "react-i18next";
import { GiLightningFrequency } from "react-icons/gi";
import { TbCircuitVoltmeter } from "react-icons/tb";
import { FcElectricity } from "react-icons/fc";
import { GiPressureCooker } from "react-icons/gi";
import { BsFillLightbulbFill } from "react-icons/bs";
import { GiDustCloud } from "react-icons/gi";
import { GiWaterDrop } from "react-icons/gi";
import { TbTemperatureCelsius } from "react-icons/tb";
export default function DataRealtimePole({ dataRealTime }) {
  // console.log(dataRealTime);
  const { t } = useTranslation();

  if (!dataRealTime) {
    return <div></div>;
  }
  return (
    <>
      <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4 sm:tw-px-4 md:tw-px-12  lg:tw-px-40 xl:tw-px-40 tw-p-4">
        <div className="tw-bg-blue-100 tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all ">
          <div className="tw-p-4 tw-text-center hover:tw-cursor-pointer">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              {t("Layout1IncludPole250Text1")} {dataRealTime.temperature}
            </h3>
            <div className="tw-flex tw-justify-center">
              <TbTemperatureCelsius className="tw-text-4xl tw-text-blue-700" />
            </div>
          </div>
        </div>
        <div className="tw-bg-blue-100 tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all">
          <div className="tw-p-4 tw-text-center hover:tw-cursor-pointer">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              {t("Layout1IncludPole250Text2")} {dataRealTime.humidity}
            </h3>
            <div className="tw-flex tw-justify-center">
              <GiWaterDrop className="tw-text-4xl tw-text-blue-700" />
            </div>
          </div>
        </div>
        <div className="tw-bg-sky-100 tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all">
          <div className="tw-p-4 tw-text-center hover:tw-cursor-pointer">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              {t("Layout1IncludPole250Text3")} {dataRealTime.pm2p5}
            </h3>
            <div className="tw-flex tw-justify-center">
              <GiDustCloud className="tw-text-4xl tw-text-blue-700" />
            </div>
          </div>
        </div>
        <div className="tw-bg-blue-100 tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all">
          <div className="tw-p-4 tw-text-center hover:tw-cursor-pointer">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              {t("Layout1IncludPole250Text4")} {dataRealTime.illumination}
            </h3>
            <div className="tw-flex tw-justify-center">
              <BsFillLightbulbFill className="tw-text-4xl tw-text-blue-700" />
            </div>
          </div>
        </div>
        <div className="tw-bg-blue-100 tw-rounded-lg tw-shadow-md  tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all">
          <div className="tw-p-4 tw-text-center hover:tw-cursor-pointer">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              {t("Layout1IncludPole250Text5")} {dataRealTime.voltage}
            </h3>
            <div className="tw-flex tw-justify-center">
              <GiPressureCooker className="tw-text-4xl tw-text-blue-700" />
            </div>
          </div>
        </div>
        <div className="tw-bg-blue-100 tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all">
          <div className="tw-p-4 tw-text-center hover:tw-cursor-pointer">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              {t("Layout1IncludPole250Text6")} {dataRealTime.current}
            </h3>
            <div className="tw-flex tw-justify-center">
              <FcElectricity className="tw-text-4xl tw-text-blue-700" />
            </div>
          </div>
        </div>
        <div className="tw-bg-blue-100 tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all">
          <div className="tw-p-4 tw-text-center hover:tw-cursor-pointer">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              {t("Layout1IncludPole250Text7")} {dataRealTime.power}
            </h3>
            <div className="tw-flex tw-justify-center">
              <TbCircuitVoltmeter className="tw-text-4xl tw-text-blue-700" />
            </div>
          </div>
        </div>
        <div className="tw-bg-blue-100 tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all">
          <div className="tw-p-4 tw-text-center hover:tw-cursor-pointer">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              {t("Layout1IncludPole250Text8")} {dataRealTime.freq}
            </h3>
            <div className="tw-flex tw-justify-center">
              <GiLightningFrequency className="tw-text-4xl tw-text-blue-700" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
