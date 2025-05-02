import { GiCctvCamera } from "react-icons/gi";
import { useTranslation } from "react-i18next";

export default function Layout7cctv() {
  const { t } = useTranslation();
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-bg-blue-50 tw-p-6 tw-mt-24">
      <div className="tw-text-lg tw-font-bold tw-text-gray-700 tw-mb-4">
        {t("Layout7cctvText1")}
      </div>

      <div className="tw-grid tw-grid-cols-1 tw-sm:tw-grid-cols-2 tw-gap-6 tw-w-full tw-max-w-3xl">
        {/* จุดของกล้อง */}
        <div className="tw-bg-white tw-shadow-lg tw-rounded-2xl tw-p-6 tw-flex tw-items-center tw-justify-between hover:tw-cursor-pointer hover:tw-bg-slate-50 hover:tw-shadow-xl hover:tw-scale-105 tw-transition-all tw-duration-300">
          <div className="tw-text-gray-700 tw-text-lg tw-font-medium">
            {t("Layout7cctvText2")}
          </div>
          <GiCctvCamera className="tw-text-blue-500 tw-text-3xl hover:tw-text-blue-700" />
        </div>

        {/* กล้องที่เสีย */}
        <div className="tw-bg-white tw-shadow-lg tw-rounded-2xl tw-p-6 tw-flex tw-items-center tw-justify-between hover:tw-cursor-pointer hover:tw-bg-slate-50 hover:tw-shadow-xl hover:tw-scale-105 tw-transition-all tw-duration-300">
          <div className="tw-text-gray-700 tw-text-lg tw-font-medium">
            {t("Layout7cctvText3")}
          </div>
          <GiCctvCamera className="tw-text-red-500 tw-text-3xl" />
        </div>
      </div>
    </div>
  );
}
