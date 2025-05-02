import { useTranslation } from "react-i18next";

export default function BigLayout({ children }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="tw-w-full tw-overflow-x-auto">
        <table className="tw-table-auto tw-min-w-full tw-text-left tw-bg-white tw-show-lg tw-rounded-lg">
          <thead className="tw-bg-blue-200 tw-text-gray-700 tw-font-bold tw-uppercase tw-text-sm tw-tracking-wider ">
            <tr>
              <th className="tw-py-2 tw-px-4">Id</th>
              <th className="tw-py-2 tw-px-4">{t("BigLayoutText1")}</th>
              <th className="tw-py-2 tw-px-4">{t("BigLayoutText2")}</th>
              <th className="tw-py-2 tw-px-4">{t("BigLayoutText3")}</th>
              <th className="tw-py-2 tw-px-4">{t("BigLayoutText4")}</th>
              <th className="tw-py-2 tw-px-4">{t("BigLayoutText5")}</th>
              <th className="tw-py-2 tw-px-4">{t("BigLayoutText6")}</th>
              <th className="tw-py-2 tw-px-4">{t("BigLayoutText7")}</th>
              <th className="tw-py-2 tw-px-4">{t("BigLayoutText8")}</th>
              <th className="tw-py-2 tw-px-4">{t("BigLayoutText9")}</th>
              <th className="tw-py-2 tw-px-4">{t("BigLayoutText10")}</th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </>
  );
}
