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
        <Card icon="♂️" title="ชาย" value={male} />
        {/* ♀️ */}
        <Card icon="♀️" title="หญิง" value={female} />
        {/* 🏠 */}
        <Card icon="🏠" title="ครัวเรือน" value={household} />
      </div>

      <div className="tw-flex tw-flex-wrap tw-gap-6 tw-justify-center tw-p-4 tw-bg-gray-100">
        <Card icon="🏬" title="ร้านค้า" value={store} />
        <Card icon="🍽️" title="ร้านอาหาร" value={restaurant} />
        <Card icon="📍" title="สถานที่" value={place} />
        <Card icon="🛏️" title="ที่พัก" value={accommodation} />

        {/* 👨‍💼 ผู้ใช้ */}
        <div className="tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-flex tw-flex-col tw-items-center tw-justify-center tw-border-2 tw-border-blue-100 hover:tw-shadow-2xl hover:tw-scale-105 hover:tw-border-blue-500 hover:tw-bg-blue-50 hover:tw-text-blue-700 transition-all duration-300 tw-cursor-pointer">
          <div className="tw-text-4xl tw-mb-2">🧑‍💼</div>
          <h1 className="tw-text-xl tw-font-bold tw-text-gray-800">พนักงาน</h1>
          <h6 className="tw-text-lg tw-text-gray-600">สถานะ {status}</h6>
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

const Card = ({ icon, title, value }) => (
  <div className="tw-w-full sm:tw-w-1/4 tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-flex tw-flex-col tw-items-center tw-justify-center tw-border-2 tw-border-blue-100 hover:tw-shadow-2xl hover:tw-scale-105 hover:tw-border-blue-500 hover:tw-bg-blue-50 hover:tw-text-blue-700 transition-all duration-300 tw-cursor-pointer">
    <div className="tw-text-4xl tw-mb-2">{icon}</div>
    <h1 className="tw-text-xl tw-font-bold tw-text-gray-800">{title}</h1>
    <h6 className="tw-text-lg tw-text-gray-600">จำนวน {value}</h6>
  </div>
);
