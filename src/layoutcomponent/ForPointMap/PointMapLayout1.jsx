import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function PointMapLayout1({ onSearch }) {
  const [searchId, setSearchId] = useState("");
  const { t } = useTranslation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchId.trim() === "") return;
    onSearch(searchId.trim());
  };

  const Refresh = () => {
    window.location.reload(false);
  };
  return (
    <>
      <h6 className="tw-text-red-400 tw-bg-slate-200 tw-text-center">
        {t("PointMapLayout1Text1")}
      </h6>
      <form
        onSubmit={handleSubmit}
        className="tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-justify-center tw-bg-slate-200 tw-p-4 tw-rounded-lg"
      >
        <input
          className="tw-bg-white tw-border tw-border-slate-300 tw-rounded-md tw-px-4 tw-py-2 tw-mb-4 sm:tw-mb-0 tw-shadow-md focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 tw-w-full sm:tw-w-auto"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder={t("PointMapLayout1Text2")}
        />
        <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-2 tw-pl-4">
          <button
            type="submit"
            className="tw-bg-blue-500 tw-text-white tw-px-6 tw-py-2 tw-rounded-md tw-shadow-lg hover:tw-bg-blue-600 focus:tw-ring-2 focus:tw-ring-blue-500 transition-colors tw-w-full sm:tw-w-auto"
          >
            {t("PointMapLayout1Text3")}
          </button>
          <button
            onClick={Refresh}
            type="submit"
            className="tw-bg-blue-500 tw-text-white tw-px-6 tw-py-2 tw-rounded-md tw-shadow-lg hover:tw-bg-blue-600 focus:tw-ring-2 focus:tw-ring-blue-500 transition-colors tw-w-full sm:tw-w-auto"
          >
            {t("PointMapLayout1Text4")}
          </button>
        </div>
      </form>
    </>
  );
}
