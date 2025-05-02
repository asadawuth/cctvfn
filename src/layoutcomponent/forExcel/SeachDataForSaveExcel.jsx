import Model from "../../layoutcomponent/Model";
import ModelForUpDataIntegratedExcel from "../../layoutcomponent/Model/forflow/ModelForUpDataIntegratedExcel";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function SeachDataForSaveExcel({
  onChange,
  data,
  makeDataExcel,
}) {
  const { t } = useTranslation();
  const [openModelCreateFileExcel, setOpenModelCreateFileExcel] =
    useState(false);

  return (
    <>
      <hr />
      <div>
        <div className="tw-flex tw-justify-center tw-items-center tw-bg-blue-50 tw-py-8 ">
          <div className="tw-bg-white tw-p-8  tw-shadow-lg tw-text-center tw-w-[800px]">
            <h2 className="tw-text-lg tw-font-semibold tw-text-blue-700 tw-mb-4">
              {t("SeachDataForSaveExcelStart")}
            </h2>
            <input
              type="date"
              id="start"
              name="start"
              min="2018-03-01"
              value={data.start}
              onChange={onChange}
              className="tw-border tw-border-blue-400 tw-p-3 tw-rounded-lg tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 tw-bg-blue-50 tw-text-blue-700 tw-transition-all tw-w-full"
            />
          </div>
        </div>
        <div className="tw-text-lg tw-font-semibold tw-text-blue-700 tw-bg-blue-50 tw-text-center">
          <h1> {t("SeachDataForSaveExcelTo")}</h1>
        </div>
        <div className="tw-flex tw-justify-center tw-items-center tw-bg-blue-50 tw-py-8 ">
          <div className="tw-bg-white tw-p-8  tw-shadow-lg tw-text-center tw-w-[800px]">
            <h2 className="tw-text-lg tw-font-semibold tw-text-blue-700 tw-mb-4">
              {t("SeachDataForSaveExcelEnd")}
            </h2>
            <input
              type="date"
              id="end"
              name="end"
              min="2018-03-01"
              value={data.end}
              onChange={onChange}
              className="tw-border tw-border-blue-400 tw-p-3 tw-rounded-lg tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 tw-bg-blue-50 tw-text-blue-700 tw-transition-all tw-w-full"
            />
          </div>
        </div>
        <div className="tw-flex tw-justify-center tw-text-white tw-bg-blue-50 tw-py-2">
          <button
            onClick={() => setOpenModelCreateFileExcel(true)}
            className="tw-bg-blue-700 tw-p-2 tw-px-28 hover:tw-px-40 hover:tw-bg-blue-500"
          >
            {t("SeachDataForSaveExcelButton")}
          </button>
        </div>
      </div>
      <Model
        title={t("ModelForUpDataIntegratedExcelTitle")}
        open={openModelCreateFileExcel}
        onClose={() => setOpenModelCreateFileExcel(false)}
      >
        <ModelForUpDataIntegratedExcel
          onClose={() => setOpenModelCreateFileExcel(false)}
          data={data}
          makeDataExcel={makeDataExcel}
        />
      </Model>
    </>
  );
}
