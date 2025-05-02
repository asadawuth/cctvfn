import { useTranslation } from "react-i18next";
export default function ModelForDeleteIdShop({
  id,
  handleDeleteShopId,
  onClose,
}) {
  const { t } = useTranslation();

  const handdleSubmitForm = async (e) => {
    e.preventDefault();
    if (!id) {
      console.error("Error: id is not defined");
      return;
    }
    try {
      await handleDeleteShopId(id);
      onClose();
    } catch (error) {
      console.error("Error deleting idShop", error);
    }
  };

  return (
    <>
      <form onSubmit={handdleSubmitForm} className="tw-flex tw-justify-center">
        <button
          type="submit"
          className="tw-bg-gradient-to-r tw-text-2xl hover:tw-px-32 tw-from-blue-400 tw-to-blue-600 hover:tw-from-blue-600 hover:tw-to-blue-400 tw-px-8 tw-py-2 tw-text-white tw-rounded-xl tw-mb-4 tw-shadow-md hover:tw-shadow-lg hover:tw-scale-110 tw-transition-all tw-duration-300 tw-font-semibold tw-tracking-wide tw-relative"
        >
          <span className="tw-absolute tw-inset-0 tw-bg-blue-300 tw-opacity-0 hover:tw-opacity-20 tw-transition-opacity tw-rounded-xl"></span>
          {t("ModelForDeleteIdShopConfirm")}
        </button>
      </form>
    </>
  );
}
