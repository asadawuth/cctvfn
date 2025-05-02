import { useState } from "react";
import Model from "../../Model";
import ModelPostForReportUser from "../../Model/forflow/ModelPostForReportUser";
import GoogleTranslateSwitcher from "../../GoogleTranslateSwitcher";
import { useTranslation } from "react-i18next";
export default function Layout1Button({ handleCreateCommentIdUserReportId }) {
  const { t } = useTranslation();
  const [openModel, setOpenModel] = useState(false);
  return (
    <>
      <div className="tw-flex tw-justify-end tw-bg-gray-100">
        <div className="tw-pr-2 tw-pt-2">
          <GoogleTranslateSwitcher />
        </div>
        <button
          className="tw-bg-blue-400 tw-py-2 tw-p-8 hover:tw-text-white"
          onClick={() => setOpenModel(true)}
        >
          {t("buttonFeelbackTextPopulation")}
        </button>
        <button
          className="tw-bg-blue-700 tw-py-2 tw-p-8 hover:tw-text-white"
          onClick={() => (window.location.href = "/userReport")}
        >
          {t("backToListReport")}
        </button>
      </div>
      <Model
        title={t("respondUserReport")}
        open={openModel}
        onClose={() => setOpenModel(false)}
      >
        <ModelPostForReportUser
          handleCreateCommentIdUserReportId={handleCreateCommentIdUserReportId}
          onClose={() => setOpenModel(false)}
        />
      </Model>
    </>
  );
}
