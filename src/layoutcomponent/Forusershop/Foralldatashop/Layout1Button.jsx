import { useState } from "react";
import Model from "../../Model";
import ModelForCommentShopUser from "../../Model/forflow/ModelForCommentShopUser";
import GoogleTranslateSwitcher from "../../GoogleTranslateSwitcher";
import { useTranslation } from "react-i18next";

export default function Layout1Button({ handlePostComment }) {
  const { t } = useTranslation();
  const [openModel, setOpenModel] = useState(false);
  return (
    <>
      <div className="tw-flex tw-justify-end tw-gap-2">
        <div>
          <GoogleTranslateSwitcher className="tw-pr-2" />
        </div>
        <div>
          <button
            onClick={() => setOpenModel(true)}
            className="tw-bg-blue-400 tw-py-2 tw-p-8 hover:tw-text-white"
          >
            {t("Layout1ButtonReview")}
          </button>
          <button
            className="tw-bg-blue-700 tw-py-2 tw-p-8 hover:tw-text-white"
            onClick={() => (window.location.href = "/report-request")}
          >
            {t("BackToListShop")}
          </button>
        </div>
      </div>
      <Model
        title={t("ModelForCommentShopUserText1")}
        open={openModel}
        onClose={() => setOpenModel(false)}
      >
        <ModelForCommentShopUser
          onClose={() => setOpenModel(false)}
          handlePostComment={handlePostComment}
        />
      </Model>
    </>
  );
}
