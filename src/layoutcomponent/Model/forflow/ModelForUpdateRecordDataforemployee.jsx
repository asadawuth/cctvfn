import { useTranslation } from "react-i18next";

export default function ModelForUpdateRecordDataforemployee({
  Submit,
  onClose,
}) {
  const { t } = useTranslation();
  return (
    <div className="tw-flex tw-justify-center tw-gap-4 tw-py-4">
      <button
        type="button"
        onClick={(e) => {
          Submit(e);
          onClose();
        }}
        className="tw-bg-blue-600 tw-text-white tw-py-2 tw-px-8 tw-rounded-md tw-shadow-md tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-blue-700 hover:tw-shadow-xl active:tw-scale-95"
      >
        {t("ModelForUpdateRecordDataforemployeeText1")}
      </button>
      <button
        type="button"
        onClick={onClose}
        className="tw-bg-red-600 tw-text-white tw-py-2 tw-px-8 tw-rounded-md tw-shadow-md tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-red-700 hover:tw-shadow-xl active:tw-scale-95"
      >
        {t("ModelForUpdateRecordDataforemployeeText2")}
      </button>
    </div>
  );
}
