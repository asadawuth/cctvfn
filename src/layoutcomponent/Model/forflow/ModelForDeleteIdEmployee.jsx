import axios from "../../../logic/config/axios";
import { useTranslation } from "react-i18next";

export default function ModelForDeleteIdEmployee({ onClose, deleteId }) {
  // console.log(deleteId);
  const { t } = useTranslation();
  const deleteIdLoginEmployee = async () => {
    try {
      await axios.delete(`/user/deleteIdEmployee/${deleteId}`);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="tw-flex tw-justify-center">
        <button
          onClick={deleteIdLoginEmployee}
          className="tw-bg-gradient-to-r tw-text-2xl hover:tw-px-32 tw-from-blue-400 tw-to-blue-600 hover:tw-from-blue-600 hover:tw-to-blue-400 tw-px-8 tw-py-2 tw-text-white tw-rounded-xl tw-mb-4 tw-shadow-md hover:tw-shadow-lg hover:tw-scale-110 tw-transition-all tw-duration-300 tw-font-semibold tw-tracking-wide tw-relative"
        >
          <span className="tw-absolute tw-inset-0 tw-bg-blue-300 tw-opacity-0 hover:tw-opacity-20 tw-transition-opacity tw-rounded-xl"></span>
          {t("ModelForDeleteIdEmployeeText2")}
        </button>
      </div>
    </>
  );
}
