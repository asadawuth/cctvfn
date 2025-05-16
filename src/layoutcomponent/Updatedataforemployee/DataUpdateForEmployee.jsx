import image1 from "../../assets/forUpdateDataforemployee/Aboutme1.jpg";
import image2 from "../../assets/forUpdateDataforemployee/Aboutme2.jpg";
import image3 from "../../assets/forUpdateDataforemployee/Aboutme3.jpg";
import image4 from "../../assets/forUpdateDataforemployee/Aboutme4.jpg";
import image5 from "../../assets/forUpdateDataforemployee/Aboutme5.jpg";
import { useTranslation } from "react-i18next";

export default function DataUpdateForEmployee() {
  const { t } = useTranslation();
  return (
    <>
      <div className="tw-bg-gray-100 tw-flex tw-justify-center">
        {t("DataUpdateForEmployeeText1")}
      </div>
      <div className="sm:tw-flex sm:tw-flex-col md:tw-flex md:tw-flex-col   tw-gap-4 tw-bg-gray-100 tw-p-4">
        {/* Left: TextArea */}
        <div className="tw-w-full  tw-border-2 tw-border-black tw-rounded-md tw-bg-white">
          <textarea
            className="tw-w-full tw-h-40 tw-p-3 tw-text-sm tw-rounded-md focus:tw-outline-none"
            placeholder="เขียนข้อความที่นี่..."
          >
            1111111111111
          </textarea>
        </div>

        {/* Right: Image Gallery */}
        <div className=" tw-w-full tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-2 lg:tw-grid-cols-2 xl:tw-grid-cols-2 2xl:tw-grid-cols-5 tw-gap-3 tw-rounded-md">
          {[image1, image2, image3, image4, image5].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`image-${idx}`}
              className="
              tw-pt-2
        tw-w-full
        tw-aspect-square
        tw-object-contain
        tw-rounded-xl
        tw-transition-transform
        tw-duration-300
        hover:tw-scale-105
        hover:tw-cursor-pointer
        2xl:tw-max-h-[400px]
      "
            />
          ))}
        </div>
      </div>
    </>
  );
}
