import { useAuth } from "../../../logic/hook/user-auth";
import { useTranslation } from "react-i18next";

export default function ModelForLogout() {
  const { t } = useTranslation();
  const { logout } = useAuth();
  return (
    <>
      <div className="tw-flex tw-justify-center">
        <button
          onClick={logout}
          className="tw-bg-gradient-to-r tw-text-2xl hover:tw-px-32 tw-from-blue-400 tw-to-blue-600 hover:tw-from-blue-600 hover:tw-to-blue-400 tw-px-8 tw-py-2 tw-text-white tw-rounded-xl tw-mb-4 tw-shadow-md hover:tw-shadow-lg hover:tw-scale-110 tw-transition-all tw-duration-300 tw-font-semibold tw-tracking-wide tw-relative"
        >
          <span className="tw-absolute tw-inset-0 tw-bg-blue-300 tw-opacity-0 hover:tw-opacity-20 tw-transition-opacity tw-rounded-xl"></span>
          {t("statusUserReportBt")}
        </button>
      </div>
    </>
  );
}
