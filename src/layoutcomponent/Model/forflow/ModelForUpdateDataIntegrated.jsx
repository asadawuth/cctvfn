import { useState } from "react";
import Loading from "./../../Loading";
import { useTranslation } from "react-i18next";

export default function ModelForUpdateDataIntegrated({
  dataIntegreted,
  createNewDataIntegratedInformation,
  onClose,
}) {
  const { t } = useTranslation();
  const [newData, setNewData] = useState({
    male: dataIntegreted?.male || "",
    female: dataIntegreted?.female || "",
    household: dataIntegreted?.household || "",
    store: dataIntegreted?.store || "",
    restaurant: dataIntegreted?.restaurant || "",
    place: dataIntegreted?.place || "",
    accommodation: dataIntegreted?.accommodation || "",
  });
  const [loading, setLoading] = useState(false);

  const handleChangeInput = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createNewDataIntegratedInformation(newData);
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <form
        onSubmit={handleSubmitForm}
        className="tw-max-w-md tw-mx-auto tw-bg-white tw-shadow-lg tw-rounded-xl tw-p-6 tw-space-y-4 tw-h-auto tw-max-h-[500px] tw-overflow-y-auto"
      >
        <h2 className="tw-text-lg tw-font-semibold tw-text-gray-800 tw-text-center">
          {t("ModelForUpdateDataIntegratedFormTitle")}
        </h2>

        <div className="tw-grid tw-grid-cols-2 tw-gap-4">
          <div>
            <label className="tw-block tw-text-gray-700 tw-font-medium">
              {t("IntegratedInformationLayOut1Text1")}
            </label>
            <input
              type="text"
              name="male"
              value={newData.male}
              onChange={handleChangeInput}
              placeholder="ชาย"
              className="tw-w-full tw-mt-1 tw-p-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:ring-2 tw-focus:ring-blue-400 tw-outline-none"
            />
          </div>

          <div>
            <label className="tw-block tw-text-gray-700 tw-font-medium">
              {t("IntegratedInformationLayOut1Text2")}
            </label>
            <input
              type="text"
              name="female"
              value={newData.female}
              onChange={handleChangeInput}
              placeholder="หญิง"
              className="tw-w-full tw-mt-1 tw-p-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:ring-2 tw-focus:ring-pink-400 tw-outline-none"
            />
          </div>

          <div className="tw-col-span-2">
            <label className="tw-block tw-text-gray-700 tw-font-medium">
              {t("IntegratedInformationLayOut1Text3")}
            </label>
            <input
              type="text"
              name="household"
              value={newData.household}
              onChange={handleChangeInput}
              placeholder="ครัวเรือน"
              className="tw-w-full tw-mt-1 tw-p-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:ring-2 tw-focus:ring-green-400 tw-outline-none"
            />
          </div>

          <div className="tw-col-span-2">
            <label className="tw-block tw-text-gray-700 tw-font-medium">
              {t("IntegratedInformationLayOut1Text4")}
            </label>
            <input
              type="text"
              name="store"
              value={newData.store}
              onChange={handleChangeInput}
              placeholder="ร้านค้า"
              className="tw-w-full tw-mt-1 tw-p-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:ring-2 tw-focus:ring-green-400 tw-outline-none"
            />
          </div>

          <div className="tw-col-span-2">
            <label className="tw-block tw-text-gray-700 tw-font-medium">
              {t("IntegratedInformationLayOut1Text5")}
            </label>
            <input
              type="text"
              name="restaurant"
              value={newData.restaurant}
              onChange={handleChangeInput}
              placeholder="ร้านอาหาร"
              className="tw-w-full tw-mt-1 tw-p-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:ring-2 tw-focus:ring-green-400 tw-outline-none"
            />
          </div>

          <div className="tw-col-span-2">
            <label className="tw-block tw-text-gray-700 tw-font-medium">
              {t("IntegratedInformationLayOut1Text6")}
            </label>
            <input
              type="text"
              name="place"
              value={newData.place}
              onChange={handleChangeInput}
              placeholder="สถานที่"
              className="tw-w-full tw-mt-1 tw-p-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:ring-2 tw-focus:ring-green-400 tw-outline-none"
            />
          </div>

          <div className="tw-col-span-2">
            <label className="tw-block tw-text-gray-700 tw-font-medium">
              {t("IntegratedInformationLayOut1Text6")}
            </label>
            <input
              type="text"
              name="accommodation"
              value={newData.accommodation}
              onChange={handleChangeInput}
              placeholder="ที่พัก"
              className="tw-w-full tw-mt-1 tw-p-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:ring-2 tw-focus:ring-green-400 tw-outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="tw-w-full tw-mt-4 tw-bg-blue-500 tw-text-white tw-font-semibold tw-py-2 tw-rounded-lg tw-hover:bg-blue-600 tw-transition"
        >
          {t("ModelForUpdateDataIntegratedSubmitButton")}
        </button>
      </form>
    </>
  );
}
