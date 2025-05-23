import { useTranslation } from "react-i18next";
export default function StatusTable({ data }) {
  const { t } = useTranslation();
  return (
    <div className="tw-overflow-x-auto  tw-flex tw-w-full">
      <div className="tw-w-full tw-max-w-4xl tw-bg-white tw-rounded-lg tw-shadow-lg">
        <table className="tw-w-full tw-border-collapse">
          <thead>
            <tr className="tw-bg-blue-900 tw-text-white">
              <th className="tw-px-4 tw-py-2 tw-text-left">{t("sos")}</th>
              <th className="tw-px-4 tw-py-2 tw-text-center">{t("Total")}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tw-bg-blue-100 tw-transition tw-duration-300 tw-ease-in-out">
              <td className="tw-px-4 tw-py-2 tw-bg-blue-100 tw-text-blue-700">
                <a
                  href="/pageaction-sosstatusreported"
                  className="tw-block tw-w-full"
                >
                  {t("status1")}
                </a>
              </td>
              <td className="tw-px-4 tw-py-2 tw-font-bold tw-text-center">
                <a
                  href="/pageaction-sosstatusreported"
                  className="tw-block tw-w-full"
                >
                  {data.reported}
                </a>
              </td>
            </tr>
            <tr className="hover:tw-bg-gray-100 tw-transition tw-duration-300 tw-ease-in-out">
              <td className="tw-px-4 tw-py-2 ">
                <a
                  href="/pageaction-sosstatusacknowledged"
                  className="tw-block tw-w-full"
                >
                  {t("status2")}
                </a>
              </td>
              <td className="tw-px-4 tw-py-2 tw-font-bold tw-text-center">
                <a
                  href="/pageaction-sosstatusacknowledged"
                  className="tw-block tw-w-full"
                >
                  {data.acknowledged}
                </a>
              </td>
            </tr>
            <tr className="tw-bg-blue-100 tw-transition tw-duration-300 tw-ease-in-out">
              <td className="tw-px-4 tw-py-2 tw-bg-blue-100 tw-text-blue-700">
                <a
                  href="/pageaction-sosstatusinprogress"
                  className="tw-block tw-w-full"
                >
                  {t("status3")}
                </a>
              </td>
              <td className="tw-px-4 tw-py-2 tw-font-bold tw-text-center">
                <a
                  href="/pageaction-sosstatusinprogress"
                  className="tw-block tw-w-full"
                >
                  {data.inProgress}
                </a>
              </td>
            </tr>
            <tr className="hover:tw-bg-gray-100 tw-transition tw-duration-300 tw-ease-in-out">
              <td className="tw-px-4 tw-py-2 ">
                <a
                  href="/pageaction-sosstatuscompleted"
                  className="tw-block tw-w-full"
                >
                  {t("status4")}
                </a>
              </td>
              <td className="tw-px-4 tw-py-2 tw-font-bold tw-text-center">
                <a
                  href="/pageaction-sosstatuscompleted"
                  className="tw-block tw-w-full"
                >
                  {data.completed}
                </a>
              </td>
            </tr>
            <tr className="tw-bg-blue-100 tw-transition tw-duration-300 tw-ease-in-out">
              <td className="tw-px-4 tw-py-2 tw-bg-blue-100 tw-text-blue-700">
                <a
                  href="/pageaction-sosstatuscanceled"
                  className="tw-block tw-w-full"
                >
                  {t("status5")}
                </a>
              </td>
              <td className="tw-px-4 tw-py-2 tw-font-bold tw-text-center">
                <a
                  href="/pageaction-sosstatuscanceled"
                  className="tw-block tw-w-full"
                >
                  {data.canceled}
                </a>
              </td>
            </tr>
            <tr className="hover:tw-bg-gray-100 tw-transition tw-duration-300 tw-ease-in-out">
              <td className="tw-px-4 tw-py-2 ">
                <a href="/sosformmobile" className="tw-block tw-w-full">
                  {t("Total")}
                </a>
              </td>
              <td className="tw-px-4 tw-py-2 tw-font-bold tw-text-center">
                <a href="/sosformmobile" className="tw-block tw-w-full">
                  {data.allStatus}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
