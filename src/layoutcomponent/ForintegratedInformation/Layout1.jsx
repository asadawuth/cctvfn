export default function Layout1({ dataIntegreted }) {
  return (
    <>
      <div className="tw-flex tw-flex-wrap tw-gap-6 tw-justify-center tw-p-4 tw-bg-gray-100">
        <div className="tw-w-full sm:tw-w-1/4 tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-flex tw-flex-col tw-items-center tw-justify-center tw-border-2 tw-border-blue-100 hover:tw-shadow-2xl hover:tw-scale-105 hover:tw-border-blue-500 hover:tw-bg-blue-50 hover:tw-text-blue-700 transition-all duration-300 tw-cursor-pointer">
          <div className="tw-text-4xl tw-mb-2">♂️</div>
          <h1 className="tw-text-xl tw-font-bold tw-text-gray-800">ชาย</h1>
          <h6 className="tw-text-lg tw-text-gray-600">
            จำนวณ {dataIntegreted.male}
          </h6>
        </div>
        <div className="tw-w-full sm:tw-w-1/4 tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-flex tw-flex-col tw-items-center tw-justify-center tw-border-2 tw-border-blue-100 hover:tw-shadow-2xl hover:tw-scale-105 hover:tw-border-blue-500 hover:tw-bg-blue-50 hover:tw-text-blue-700 transition-all duration-300 tw-cursor-pointer">
          <div className="tw-text-4xl tw-mb-2">♀️</div>
          <h1 className="tw-text-xl tw-font-bold tw-text-gray-800">หญิง</h1>
          <h6 className="tw-text-lg tw-text-gray-600">
            จำนวณ {dataIntegreted.female}
          </h6>
        </div>
        <div className="tw-w-full sm:tw-w-1/4 tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-flex tw-flex-col tw-items-center tw-justify-center tw-border-2 tw-border-blue-100 hover:tw-shadow-2xl hover:tw-scale-105 hover:tw-border-blue-500 hover:tw-bg-blue-50 hover:tw-text-blue-700 transition-all duration-300 tw-cursor-pointer">
          <div className="tw-text-4xl tw-mb-2">🏠</div>
          <h1 className="tw-text-xl tw-font-bold tw-text-gray-800">
            ครัวเรือน
          </h1>
          <h6 className="tw-text-lg tw-text-gray-600">
            จำนวณ {dataIntegreted.household}
          </h6>
        </div>
      </div>

      <div className="tw-flex tw-flex-wrap tw-gap-6 tw-justify-center tw-p-4 tw-bg-gray-100">
        <div className="tw-w-full sm:tw-w-1/6 tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-flex tw-flex-col tw-items-center tw-justify-center tw-border-2 tw-border-blue-100 hover:tw-shadow-2xl hover:tw-scale-105 hover:tw-border-blue-500 hover:tw-bg-blue-50 hover:tw-text-blue-700 transition-all duration-300 tw-cursor-pointer">
          <div className="tw-text-4xl tw-mb-2">🏬</div>
          <h1 className="tw-text-xl tw-font-bold tw-text-gray-800">ร้านค้า </h1>
          <h6 className="tw-text-lg tw-text-gray-600">
            จำนวณ {dataIntegreted.store}
          </h6>
        </div>
        <div className="tw-w-full sm:tw-w-1/6 tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-flex tw-flex-col tw-items-center tw-justify-center tw-border-2 tw-border-blue-100 hover:tw-shadow-2xl hover:tw-scale-105 hover:tw-border-blue-500 hover:tw-bg-blue-50 hover:tw-text-blue-700 transition-all duration-300 tw-cursor-pointer">
          <div className="tw-text-4xl tw-mb-2">🍽️</div>
          <h1 className="tw-text-xl tw-font-bold tw-text-gray-800">
            ร้านอาหาร
          </h1>
          <h6 className="tw-text-lg tw-text-gray-600">
            จำนวณ {dataIntegreted.restaurant}
          </h6>
        </div>
        <div className="tw-w-full sm:tw-w-1/6 tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-flex tw-flex-col tw-items-center tw-justify-center tw-border-2 tw-border-blue-100 hover:tw-shadow-2xl hover:tw-scale-105 hover:tw-border-blue-500 hover:tw-bg-blue-50 hover:tw-text-blue-700 transition-all duration-300 tw-cursor-pointer">
          <div className="tw-text-4xl tw-mb-2">📍</div>
          <h1 className="tw-text-xl tw-font-bold tw-text-gray-800">สถานที่</h1>
          <h6 className="tw-text-lg tw-text-gray-600">
            จำนวณ {dataIntegreted.place}
          </h6>
        </div>
        <div className="tw-w-full sm:tw-w-1/6 tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-flex tw-flex-col tw-items-center tw-justify-center tw-border-2 tw-border-blue-100 hover:tw-shadow-2xl hover:tw-scale-105 hover:tw-border-blue-500 hover:tw-bg-blue-50 hover:tw-text-blue-700 transition-all duration-300 tw-cursor-pointer">
          <div className="tw-text-4xl tw-mb-2">🛏️</div>
          <h1 className="tw-text-xl tw-font-bold tw-text-gray-800">ที่พัก</h1>
          <h6 className="tw-text-lg tw-text-gray-600">
            จำนวณ {dataIntegreted.accommodation}
          </h6>
        </div>
        <div className="tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-flex tw-flex-col tw-items-center tw-justify-center tw-border-2 tw-border-blue-100 hover:tw-shadow-2xl hover:tw-scale-105 hover:tw-border-blue-500 hover:tw-bg-blue-50 hover:tw-text-blue-700 transition-all duration-300 tw-cursor-pointer">
          <div className="tw-text-4xl tw-mb-2">🧑‍💼</div>
          <h1 className="tw-text-xl tw-font-bold tw-text-gray-800">พนักงาน</h1>
          <h6 className="tw-text-lg tw-text-gray-600">
            สถานะ {dataIntegreted?.user?.status}
          </h6>
          <h6 className="tw-text-lg tw-text-gray-600">
            {dataIntegreted?.user?.firstName} {dataIntegreted?.user?.lastName}
          </h6>
          <h6 className="tw-text-lg tw-text-gray-600">
            {new Date(dataIntegreted.createdAt).toLocaleDateString()}
            เวลา
            {new Date(dataIntegreted.createdAt).toLocaleTimeString("th-TH", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
            })}
          </h6>
        </div>
      </div>
    </>
  );
}
