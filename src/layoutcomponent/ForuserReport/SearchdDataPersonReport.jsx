import { useState } from "react";
import TextError from "../TextError";
import { useTranslation } from "react-i18next";

export default function SearchdDataPersonReport({
  setFirstName,
  setLastName,
  textError,
}) {
  const { t } = useTranslation();
  const [localFirstName, setLocalFirstName] = useState("");
  const [localLastName, setLocalLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName(localFirstName);
    setLastName(localLastName);
  };

  const Refresh = () => {
    window.location.reload(false);
  };

  return (
    <>
      <form
        className="tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-justify-center tw-bg-slate-200 tw-p-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={localFirstName}
          onChange={(e) => setLocalFirstName(e.target.value)}
          className="tw-bg-white tw-border tw-border-slate-300 tw-rounded-md tw-px-4 tw-py-2 tw-mb-4 sm:tw-mb-0 sm:tw-mr-4 tw-shadow-md focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 tw-w-full sm:tw-w-auto"
          placeholder={t("DataInfileCreatedIdEmployeeForm.firstNameGuess")}
        />
        <input
          type="text"
          value={localLastName}
          onChange={(e) => setLocalLastName(e.target.value)}
          className="tw-bg-white tw-border tw-border-slate-300 tw-rounded-md tw-px-4 tw-py-2 tw-mb-4 sm:tw-mb-0 tw-shadow-md focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500 tw-w-full sm:tw-w-auto"
          placeholder={t("DataInfileCreatedIdEmployeeForm.lastNameGuess")}
        />
        <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-2 tw-pl-4">
          <button
            type="submit"
            className="tw-bg-blue-500 tw-text-white tw-px-6 tw-py-2 tw-rounded-md tw-shadow-lg hover:tw-bg-blue-600 focus:tw-ring-2 focus:tw-ring-blue-500 transition-colors tw-w-full sm:tw-w-auto"
          >
            {t("DataInfileCreatedIdEmployeeForm.search")}
          </button>
          <button
            onClick={Refresh}
            className="tw-bg-blue-500 tw-text-white tw-px-6 tw-py-2 tw-rounded-md tw-shadow-lg hover:tw-bg-blue-600 focus:tw-ring-2 focus:tw-ring-blue-500 transition-colors tw-w-full sm:tw-w-auto"
          >
            {t("DataInfileCreatedIdEmployeeForm.showPreviousData")}
          </button>
        </div>
      </form>
      <div className="tw-flex tw-justify-center tw-mt-4">
        {textError ? (
          <TextError text={t("DataInfileCreatedIdEmployeeForm.dataNotFound")} />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
