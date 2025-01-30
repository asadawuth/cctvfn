import img1 from "../../assets/forPole250/temperature.png";
import img2 from "../../assets/forPole250/moisture.png";
import img3 from "../../assets/forPole250/pm.png";
import img4 from "../../assets/forPole250/light.png";
import img5 from "../../assets/forPole250/pressure.png";
import img6 from "../../assets/forPole250/electriccurrent.png";
import img7 from "../../assets/forPole250/setfire.jpg";
import img8 from "../../assets/forPole250/frequency.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LayoutText from "../../layoutcomponent/DashboardAllValue/LayoutText";

export default function Layout1IncludPole250() {
  const [data, setData] = useState();
  // console.log(data);
  useEffect(() => {}, []);
  return (
    <>
      {/* <LayoutText text={"สรุปค่าเฉลี่ยเสา250ต้น"} /> */}
      <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-4 tw-px-4 tw-bg-black tw-p-4">
        <div className="tw-bg-red-100 tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all ">
          <img
            loading="lazy"
            src={img1}
            alt="temperature"
            className="tw-w-full tw-h-48 sm:tw-h-40 md:tw-h-48 xl:tw-h-60  hover:tw-cursor-pointer"
          />
          <div className="tw-p-4 tw-text-center">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              อุหภูมิ 27 C
            </h3>
          </div>
        </div>
        <div className="tw-bg-teal-50 tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all">
          <img
            src={img2}
            alt="temperature"
            className="tw-w-full tw-h-48 sm:tw-h-40 md:tw-h-48 xl:tw-h-60  hover:tw-cursor-pointer"
          />
          <div className="tw-p-4 tw-text-center">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              ความชื้น 27
            </h3>
          </div>
        </div>
        <div className="tw-bg-sky-100 tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all">
          <img
            src={img3}
            alt="temperature"
            className="tw-w-full tw-h-48 sm:tw-h-40 md:tw-h-48 xl:tw-h-60  hover:tw-cursor-pointer"
          />
          <div className="tw-p-4 tw-text-center">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              ค่าฝุ่น 8.5
            </h3>
          </div>
        </div>
        <div className="tw-bg-gray-100 tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all">
          <img
            src={img4}
            alt="temperature"
            className="tw-w-full tw-h-48 sm:tw-h-40 md:tw-h-48 xl:tw-h-60  hover:tw-cursor-pointer"
          />
          <div className="tw-p-4 tw-text-center">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              แสงสว่าง xx
            </h3>
          </div>
        </div>
        <div className="tw-bg-blue-100 tw-rounded-lg tw-shadow-md  tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all">
          <img
            src={img5}
            alt="temperature"
            className="tw-w-full tw-h-48 sm:tw-h-40 md:tw-h-48 xl:tw-h-60  hover:tw-cursor-pointer"
          />
          <div className="tw-p-4 tw-text-center">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              แรงดัน xx
            </h3>
          </div>
        </div>
        <div className="tw-bg-yellow-100 tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all">
          <img
            src={img6}
            alt="temperature"
            className="tw-w-full tw-h-48 sm:tw-h-40 md:tw-h-48 xl:tw-h-60  hover:tw-cursor-pointer"
          />
          <div className="tw-p-4 tw-text-center">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              กระแสไฟฟ้า xx
            </h3>
          </div>
        </div>
        <div className="tw-bg-orange-100 tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all">
          <img
            src={img7}
            alt="temperature"
            className="tw-w-full tw-h-48 sm:tw-h-40 md:tw-h-48 xl:tw-h-60  hover:tw-cursor-pointer"
          />
          <div className="tw-p-4 tw-text-center">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              กำลังไฟฟ้า xx
            </h3>
          </div>
        </div>
        <div className="tw-bg-white tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all">
          <img
            src={img8}
            alt="temperature"
            className="tw-w-full tw-h-48 sm:tw-h-40 md:tw-h-48 xl:tw-h-60  hover:tw-cursor-pointer"
          />
          <div className="tw-p-4 tw-text-center">
            <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
              ความถี่ xx
            </h3>
          </div>
        </div>
      </div>

      {/* <Link to="/pageaction-ploe250">
        <div className="tw-mt-2 tw-flex tw-justify-center tw-items-center tw-h-12 tw-bg-blue-100 hover:tw-bg-blue-200 tw-rounded-lg tw-mx-20 sm:tw-mx-28  md:tw-mx-56 lg:tw-mx-80  xl:tw-mx-96 tw-mb-2 hover:tw-cursor-pointer">
          <span className="tw-text-blue-800 tw-text-lg tw-font-semibold">
            ค่าของเสาแต่ละเสา
          </span>
        </div>
      </Link> */}
    </>
  );
}
