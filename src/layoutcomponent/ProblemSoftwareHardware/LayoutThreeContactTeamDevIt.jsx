import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BiMapPin } from "react-icons/bi";
import bg3 from "../../assets/ProblemSoftwareHardware/bg3.png";
import mass from "../../assets/ProblemSoftwareHardware/mass.webp";
import { useTranslation } from "react-i18next";

export default function LayoutThreeContactTeamDevIt() {
  const { t } = useTranslation();
  return (
    <div
      className="tw-w-full tw-flex tw-justify-center tw-bg-cover tw-bg-center tw-p-8 md:tw-p-16"
      style={{ backgroundImage: `url(${bg3})` }}
    >
      <div className="tw-w-full tw-flex tw-flex-col tw-gap-8 tw-justify-center tw-items-center tw-max-w-screen-md tw-p-4 tw-mx-auto tw-rounded-lg tw-bg-opacity-75 tw-bg-white">
        <div className="tw-w-full tw-break-words tw-text-center">
          <div className="tw-flex tw-flex-col tw-items-center tw-gap-4">
            <div className="tw-flex tw-items-start tw-gap-2">
              <BiMapPin className="tw-text-xl sm:tw-text-2xl" />
              <h4 className="tw-text-sm sm:tw-text-base">
                189/24, {t("LayoutThreeContactTeamDevItText1")} 10540
              </h4>
            </div>
            <div className="tw-flex tw-items-start tw-gap-2">
              <BsFillTelephoneFill className="tw-text-xl sm:tw-text-2xl" />
              <div className="tw-text-sm sm:tw-text-base">+662-312-0536</div>
            </div>
            <div className="tw-flex tw-items-start tw-gap-2">
              <HiOutlineMail className="tw-text-xl sm:tw-text-2xl" />
              <div className="tw-text-sm sm:tw-text-base">
                sales@masscorporation.co.th
              </div>
            </div>
            <div className="tw-break-words tw-flex tw-items-start tw-max-w-full sm:tw-max-w-none">
              <a
                href="https://www.masscorporation.co.th/TH/index.html"
                className="tw-text-blue-600 hover:tw-underline tw-text-sm sm:tw-text-base tw-overflow-hidden tw-text-ellipsis tw-break-all tw-inline-block"
              >
                https://www.masscorporation.co.th/TH/index.html
              </a>
            </div>
          </div>
        </div>
        <div className="tw-flex tw-justify-center tw-w-full tw-max-w-[300px]">
          <img
            loading="lazy"
            src={mass}
            alt="mass"
            className="tw-w-full tw-h-auto tw-rounded-lg tw-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
