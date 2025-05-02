import { useTranslation } from "react-i18next";

export default function Layout1({ dataIntegreted }) {
  const {
    male = 0,
    female = 0,
    household = 0,
    store = 0,
    restaurant = 0,
    place = 0,
    accommodation = 0,
    createdAt,
    user = {},
  } = dataIntegreted ?? {};
  const { t } = useTranslation();
  const { status = "ไม่ระบุ", firstName = "", lastName = "" } = user ?? {};

  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString()
    : "ไม่มีข้อมูลวันที่";
  const formattedTime = createdAt
    ? new Date(createdAt).toLocaleTimeString("th-TH", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
    : "--:--:--";

  return (
    <>
      <div className="tw-flex tw-flex-wrap tw-gap-6 tw-justify-center tw-p-4 tw-bg-gray-100">
        {/* ♂️ */}
        <Card
          t={t("IntegratedInformationLayOut1Text10")}
          icon="♂️"
          title={t("IntegratedInformationLayOut1Text1")}
          value={male}
        />
        {/* ♀️ */}
        <Card
          t={t("IntegratedInformationLayOut1Text10")}
          icon="♀️"
          title={t("IntegratedInformationLayOut1Text2")}
          value={female}
        />
        {/* 🏠 */}
        <Card
          t={t("IntegratedInformationLayOut1Text10")}
          icon="🏠"
          title={t("IntegratedInformationLayOut1Text3")}
          value={household}
        />
      </div>

      <div className="tw-flex tw-flex-wrap tw-gap-6 tw-justify-center tw-p-4 tw-bg-gray-100">
        <Card
          t={t("IntegratedInformationLayOut1Text10")}
          icon="🏬"
          title={t("IntegratedInformationLayOut1Text4")}
          value={store}
        />
        <Card
          t={t("IntegratedInformationLayOut1Text10")}
          icon="🍽️"
          title={t("IntegratedInformationLayOut1Text5")}
          value={restaurant}
        />
        <Card
          t={t("IntegratedInformationLayOut1Text10")}
          icon="📍"
          title={t("IntegratedInformationLayOut1Text6")}
          value={place}
        />
        <Card
          t={t("IntegratedInformationLayOut1Text10")}
          icon="🛏️"
          title={t("IntegratedInformationLayOut1Text7")}
          value={accommodation}
        />

        {/* 👨‍💼 ผู้ใช้ */}
        <div className="tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-flex tw-flex-col tw-items-center tw-justify-center tw-border-2 tw-border-blue-100 hover:tw-shadow-2xl hover:tw-scale-105 hover:tw-border-blue-500 hover:tw-bg-blue-50 hover:tw-text-blue-700 transition-all duration-300 tw-cursor-pointer">
          <div className="tw-text-4xl tw-mb-2">🧑‍💼</div>
          <h1 className="tw-text-xl tw-font-bold tw-text-gray-800">
            {t("IntegratedInformationLayOut1Text8")}
          </h1>
          <h6 className="tw-text-lg tw-text-gray-600">
            {t("IntegratedInformationLayOut1Text9")} {status}
          </h6>
          <h6 className="tw-text-lg tw-text-gray-600">
            {firstName} {lastName}
          </h6>
          <h6 className="tw-text-lg tw-text-gray-600">
            {formattedDate} เวลา {formattedTime}
          </h6>
        </div>
      </div>
    </>
  );
}

const Card = ({ icon, title, value, t }) => (
  <div className="tw-w-full sm:tw-w-1/4 tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-flex tw-flex-col tw-items-center tw-justify-center tw-border-2 tw-border-blue-100 hover:tw-shadow-2xl hover:tw-scale-105 hover:tw-border-blue-500 hover:tw-bg-blue-50 hover:tw-text-blue-700 transition-all duration-300 tw-cursor-pointer">
    <div className="tw-text-4xl tw-mb-2">{icon}</div>
    <h1 className="tw-text-xl tw-font-bold tw-text-gray-800">{title}</h1>
    <h6 className="tw-text-lg tw-text-gray-600">
      {t} {value}
    </h6>
  </div>
);
