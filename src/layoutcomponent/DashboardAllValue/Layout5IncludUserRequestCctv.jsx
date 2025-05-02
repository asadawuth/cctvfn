import { Link } from "react-router-dom";
import axios from "../../logic/config/axios";
import { useEffect, useState } from "react";
import Loading from "../../layoutcomponent/Loading";
import { useTranslation } from "react-i18next";

export default function Layout5IncludUserRequestCctv() {
  const { t } = useTranslation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/documentsrequestcctv/datatotalandcountallstatus")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (!data) {
    return <div className="tw-text-center tw-text-red-500">ไม่มีข้อมูล</div>;
  }

  return (
    <>
      {loading && <Loading />}
      <div>
        <div className="tw-text-center tw-pt-2 tw-text-xl tw-font-semibold tw-text-gray-800 tw-pb-2 tw-bg-blue-300 tw-rounded-2xl tw-mx-auto hover:tw-bg-blue-400 hover:tw-text-white hover:tw-shadow-lg transition-all duration-300">
          {t("textTitle")}
        </div>
      </div>

      <div className="tw-w-full tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 tw-justify-center tw-py-2">
        {/* Card for Submit Documents */}
        <Link
          to="/pageaction-requestdocuments"
          className="tw-w-full sm:tw-w-1/4 tw-flex tw-items-stretch"
        >
          <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-bg-blue-100 tw-p-6 sm:tw-p-8 tw-rounded-xl tw-shadow-lg hover:tw-bg-blue-200 tw-transition-all hover:tw-scale-105 tw-cursor-pointer tw-w-full">
            <span className="tw-text-blue-700 tw-text-4xl sm:tw-text-5xl tw-font-extrabold">
              {data.totalSendDocument || 0}
            </span>
            <span className="tw-text-blue-600 tw-text-md sm:tw-text-lg tw-mt-2">
              {t("cctvText1")}
            </span>
          </div>
        </Link>

        {/* Card for Passed */}
        <Link
          to="/pageaction-requestcctvpass"
          className="tw-w-full sm:tw-w-1/4 tw-flex tw-items-stretch"
        >
          <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-bg-green-100 tw-p-6 sm:tw-p-8 tw-rounded-xl tw-shadow-lg hover:tw-bg-green-200 tw-transition-all hover:tw-scale-105 tw-cursor-pointer tw-w-full">
            <span className="tw-text-green-700 tw-text-4xl sm:tw-text-5xl tw-font-extrabold">
              {data.totalDocumentPass || 0}
            </span>
            <span className="tw-text-green-600 tw-text-md sm:tw-text-lg tw-mt-2">
              {t("cctvText2")}
            </span>
          </div>
        </Link>

        {/* Card for Not Passed */}
        <Link
          to="/pageaction-requestcctvnotpass"
          className="tw-w-full sm:tw-w-1/4 tw-flex tw-items-stretch"
        >
          <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-bg-red-100 tw-p-6 sm:tw-p-8 tw-rounded-xl tw-shadow-lg hover:tw-bg-red-200 tw-transition-all hover:tw-scale-105 tw-cursor-pointer tw-w-full">
            <span className="tw-text-red-700 tw-text-4xl sm:tw-text-5xl tw-font-extrabold">
              {data.totalDocumentNotpass || 0}
            </span>
            <span className="tw-text-red-600 tw-text-md sm:tw-text-lg tw-mt-2">
              {t("cctvText3")}
            </span>
          </div>
        </Link>

        {/* Card for Total */}
        <Link
          to="/userrequest-forwatchcctv"
          className="tw-w-full sm:tw-w-1/4 tw-flex tw-items-stretch"
        >
          <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-bg-gray-100 tw-p-6 sm:tw-p-8 tw-rounded-xl tw-shadow-lg hover:tw-bg-gray-300 tw-transition-all hover:tw-scale-105 tw-cursor-pointer tw-w-full">
            <span className="tw-text-gray-700 tw-text-4xl sm:tw-text-5xl tw-font-extrabold">
              {data.totalAllData || 0}
            </span>
            <span className="tw-text-gray-600 tw-text-md sm:tw-text-lg tw-mt-2">
              {t("Total")}
            </span>
          </div>
        </Link>
      </div>
    </>
  );
}
