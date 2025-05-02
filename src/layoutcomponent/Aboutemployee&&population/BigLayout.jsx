import { useTranslation } from "react-i18next";

export default function BigLayout({ children }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="tw-w-full tw-overflow-x-auto tw-px-36">
        <table className="tw-table-auto tw-min-w-full tw-text-left tw-bg-white tw-show-lg tw-rounded-lg">
          <thead className="tw-bg-blue-100 tw-text-gray-700 tw-font-bold tw-text-sm tw-tracking-wider ">
            <tr>
              <th className="tw-py-2 tw-px-2">Id</th>
              <th className="tw-py-2 tw-px-2">
                {t("DataInfileCreatedIdEmployeeForm.title")}
              </th>
              <th className="tw-py-2 tw-px-4">
                {t("DataInfileCreatedIdEmployeeForm.firstName")}
              </th>
              <th className="tw-py-2 tw-px-4">
                {" "}
                {t("DataInfileCreatedIdEmployeeForm.lastName")}
              </th>
              <th className="tw-py-2 tw-px-2">
                {" "}
                {t("DataInfileCreatedIdEmployeeForm.tel")}
              </th>
              <th className="tw-py-2 tw-px-2">
                {" "}
                {t("DataInfileCreatedIdEmployeeForm.email")}
              </th>
              <th className="tw-py-2 tw-px-4">
                {" "}
                {t("DataInfileCreatedIdEmployeeForm.status.status")}
              </th>
              <th className="tw-py-2 tw-px-2 tw-text-center">
                {t("DataInfileCreatedIdEmployeeForm.profile")}
              </th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </>
  );
}
