import { useState } from "react";
import ModelForIntegratedInformation from "../Model/forflow/ModelForIntegratedInformation";
import ModelForUpdateDataIntegrated from "../Model/forflow/ModelForUpdateDataIntegrated";
import { useTranslation } from "react-i18next";

export default function Layout2({
  dataIntegreted,
  createNewDataIntegratedInformation,
}) {
  const { t } = useTranslation();
  const [openModelUpdateData, setOpenModelData] = useState(false);

  return (
    <>
      <div className="tw-bg-gray-100 tw-w-full tw-flex tw-justify-center tw-gap-8 tw-py-4">
        <div>
          <button
            onClick={() => setOpenModelData(true)}
            className="tw-bg-blue-500 tw-text-white tw-p-3 tw-px-10 tw-rounded-lg tw-shadow-md hover:tw-bg-blue-600 hover:tw-shadow-lg transition-all duration-300 tw-flex tw-items-center tw-gap-2"
          >
            ✏️ <span>{t("IntegratedInformationLayOut2")}</span>
          </button>
        </div>
      </div>
      <ModelForIntegratedInformation
        title={t("ModelForIntegratedInformation")}
        open={openModelUpdateData}
        onClose={() => setOpenModelData(false)}
      >
        <ModelForUpdateDataIntegrated
          dataIntegreted={dataIntegreted}
          createNewDataIntegratedInformation={
            createNewDataIntegratedInformation
          }
          onClose={() => setOpenModelData(false)}
        />
      </ModelForIntegratedInformation>
    </>
  );
}
